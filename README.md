# Gatsby 101 Workshop

#### Starter Commands

##### Install Globally and Init

```bash
npm install -g gatsby-cli
npm init
npm install react react-dom gatsby
```

#### Start with a Gatsby page

```bash
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

#### Start Development Server

localhost:8000

```bash
gatsby develop
```

#### Setup React on src/pages/index.js

```javascript
import React from 'react';

export default function Home() {
	return <div>Hello, World!</div>;
}
```
