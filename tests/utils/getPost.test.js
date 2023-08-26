import fs from 'fs'
import { getPost } from '../../src/utils/getPosts'
import { date, excerpt,fileContent, filename, slug, title } from './commonMocks'

jest.mock('fs')

describe('getting a post when exists', () => {
  beforeEach(() => {
    fs.readdirSync.mockReturnValue([filename])
    fs.readFileSync.mockReturnValue(fileContent)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should return one post with", () => {
    const post = getPost(filename, ['slug', 'title', 'excerpt', 'date', 'content'])

    expect(post.title).toBe(title);
    expect(post.slug).toBe(slug);
    expect(post.excerpt).toBe(excerpt);
    expect(post.date).toMatchObject(new Date(date));
    expect(post.content).toBe('<p>Today I will show you how to create a React App from scratch. You will learn how to create a React App using Webpack and Babel, using the React Hooks and how to deploy your app to Netlify.</p>\n');
  })
})

describe('getting a post when not exists', () => {
  beforeEach(() => {
    fs.readFileSync.mockReturnValueOnce(undefined)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should throw an error if the file does not exist', () => {
    fs.readFileSync.mockReturnValueOnce(undefined)
    expect(() => {
      getPost('react-tutorial.md', ['slug', 'title', 'excerpt', 'date', 'content'])
    }).toThrowError('File not found')
  })
})
