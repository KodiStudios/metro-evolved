---
title: Configure Custom Url
---

# Configure Custom Url Using Go Daddy

## GoDaddy DNS Settings

| Type  | Key             | Value                                |
| ----- | --------------- | ------------------------------------ |
| A     | @               | 185.199.108.153                      |
| A     | \*              | 185.199.108.153                      |
| CNAME | www             | yoururl.com                          |
| CNAME | \_domainconnect | \_domainconnect.gd.domaincontrol.com |

## GitHub Pages

In GitHub your-cool-site Project:  
**Settings** > **Pages**  
Add Custom Domain Url  
No need for "https" or "www" prefixes, just:  
`yoururl.com`

## Docusaurus Config

Modify the following entries:
```TypeScript
url: `https://yoururl.com`  
baseUrl: `/`  
```

Comment out the following entries:  
```TypeScript
// organizationName:
// projectName:
```

## Add CName file

This CName file is needed, otherwise GitHub will revert your site back to its default .io url.

Create new file:  
`static/CNAME`

In it, add your url:  
`yoururl.com`

Note: http prefix isn't needed.
