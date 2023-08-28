import fs from 'fs'
import { getPost } from '../../src/utils/getPosts'
import { HowToCreateAReactApp, ThreeSitesToLearnReact } from './commonMocks'

jest.mock('fs')

describe('getting a post when exists (only text)', () => {
  const { date, excerpt, content, filename, slug, title } = HowToCreateAReactApp

  beforeEach(() => {
    fs.readdirSync.mockReturnValue([filename])
    fs.readFileSync.mockReturnValue(content)
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
    expect(() => {
      getPost('react-tutorial.md', ['slug', 'title', 'excerpt', 'date', 'content'])
    }).toThrowError('File not found')
  })
})

describe('getting a post when exists (with header h2, list and links)', () => {
  const { date, excerpt, content, filename, slug, title } = ThreeSitesToLearnReact

  beforeEach(() => {
    fs.readdirSync.mockReturnValue([filename])
    fs.readFileSync.mockReturnValue(content)
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
    expect(post.content).toBe(`<p>Today I&#39;m gonna show you 3 sites to learn React.</p>
<h2>Udemy</h2>
<p>There are a lot of free and paid courses on Udemy. You can find courses from the basics to advanced topics.</p>
<h2>Youtube</h2>
<p>There are a lot of channels on Youtube that you can learn React. I recommend the channel:</p>
<ul>
<li><a href="https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg">Rocketseat</a></li>
<li><a href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ">freeCodeCamp</a></li>
</ul>
<h2>Dev.to</h2>
<p>Dev.to is a community of software developers that share their knowledge. You can find a lot of articles about React.</p>
<p>Do you know another site to learn React? Share with us in the comments.</p>\n`);
  })
})
