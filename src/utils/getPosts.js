import fs from 'fs'
import grayMatter from 'gray-matter'
import { marked } from 'marked'

function sorterDesc (postA, postB) {
  const dateA = new Date(postA.date)
  const dateB = new Date(postB.date)
  return dateB - dateA
}

function getPost(filename, fields) {
  try {
    const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8')

    if (!fileContent) {
      throw new Error('File not found')
    }

    const { content, data: metadata } = grayMatter(fileContent)
    const htmLContent = marked.parse(content)

    const data = {
      ...metadata,
      slug: filename.replace('.md', ''),
      content: htmLContent
    }

    const response = {}

    fields.forEach((field) => {
      if (data[field]) {
        response[field] = data[field]
      }
    })

    return response
  } catch (error) {
    throw error
  }
}

function getAllPosts(fields = []) {
  const files = fs.readdirSync('./_posts')

  if (!fields.length) {
    return []
  }

  const posts = files.map((filename) => {
    return getPost(filename, fields)
  })

  return posts.sort(sorterDesc)
}

export { getAllPosts, getPost }
