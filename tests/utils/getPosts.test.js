import fs from 'fs'
import { getAllPosts } from '../../src/utils/getPosts'
import { date, excerpt,fileContent, filename, slug, title } from './commonMocks'

jest.mock('fs')

describe('getting all posts', () => {
  it("should return a empty list", () => {
    fs.readdirSync.mockReturnValueOnce([])
    const posts = getAllPosts()
    expect(posts.length).toBe(0);
  })

  beforeEach(() => {
    fs.readdirSync.mockReturnValue([filename])
    fs.readFileSync.mockReturnValue(fileContent)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should return one post with slug and title values", () => {
    const posts = getAllPosts(['slug', 'title'])

    expect(posts.length).toBe(1);
    expect(posts[0].title).toBe(title);
    expect(posts[0].slug).toBe(slug);
  })

  it("should return one post with slug, title, excerpt and date values", () => {
    const posts = getAllPosts(['slug', 'title', 'excerpt', 'date'])
    expect(posts.length).toBe(1);
    expect(posts[0].title).toBe(title);
    expect(posts[0].slug).toBe(slug);
    expect(posts[0].excerpt).toBe(excerpt);
    expect(posts[0].date).toMatchObject(new Date(date));
  })

  it("should not return one post with excerpt and date properties", () => {
    const posts = getAllPosts(['slug', 'title'])
    expect(posts.length).toBe(1);
    expect(posts[0].excerpt).toBeUndefined();
    expect(posts[0].date).toBeUndefined();
  })
})
 