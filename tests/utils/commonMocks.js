const fileContent = `---
title: How to create a React App
excerpt: Learn in this article how to create a React App from scratch
date: 2023-08-23 19:01:23

---

Today I will show you how to create a React App from scratch. You will learn how to create a React App using Webpack and Babel, using the React Hooks and how to deploy your app to Netlify.`

const title = 'How to create a React App'

const slug = 'how-to-create-a-react-app'

const filename = `${slug}.md`

const excerpt = 'Learn in this article how to create a React App from scratch'

const date = '2023-08-23T19:01:23.000Z'

export {
  date,
  excerpt,
  fileContent,
  filename,
  slug,
  title,
}
