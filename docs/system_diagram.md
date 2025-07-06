# システム構成図

```mermaid
flowchart TD
    browser(ブラウザ)
    github_pages(GitHub Pages)
    repo(リポジトリ)

    browser -->|HTTP| github_pages
    repo -->|push| github_pages
```
