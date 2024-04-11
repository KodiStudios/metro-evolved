# Using Go Daddy

## Go Daddy DNS Settings

| Type  | Key             | Value                                |
| ----- | --------------- | ------------------------------------ |
| A     | @               | 185.199.108.153                      |
| A     | \*              | 185.199.108.153                      |
| CNAME | www             | yoururl.com                          |
| CNAME | \_domainconnect | \_domainconnect.gd.domaincontrol.com |

## GitHub Pages

In Settings > Pages
Add Custom Domain Url

## Docusaurus Config

url: `https://yoururl.com`
baseUrl: `/`

Comment out:  
organizationName:
projectName:

## Add CName file

Create new file:
`static/CNAME`

In it, add your url:
`yoururl.com`

Note: http prefix isn't needed.

This file is needed, otherwise GitHub will revert your site back to its default .io url.
