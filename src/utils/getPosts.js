import { remark } from 'remark'
import fs from 'fs'
import grayMatter from 'gray-matter'
import remarkHTML from 'remark-html'

function getPost(filename, fields) {
  const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8')
  const { content, data: metadata } = grayMatter(fileContent)
  const htmLContent = remark()
    .use(remarkHTML)
    .processSync(content)
    .toString()

  const data = {
    ...metadata,
    slug: filename.replace('.md', ''),
    content: htmLContent
  }

  const response = {}

  fields.forEach((field) => {
    response[field] = data[field]
  })

  return response
}

function getAllPosts(fields = []) {
  const files = fs.readdirSync('./_posts')

  if (!fields.length) {
    return []
  }

  const posts = files.map((filename) => {
    return getPost(filename, fields)
  })

  return posts
}

export { getAllPosts, getPost }
