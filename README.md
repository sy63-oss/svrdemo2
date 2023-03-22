# Install on Azure Static Web app steps

- Fork this repo
- Create a Static Web App in Azure panel
- Select a convenient group / ressource / plan
- Choose Github for the source
- Select your Github Account
- Select your repository and the main branch
- Choose a custom build preset
- Enter these settings for the custom build :


| property          | value          |
| ----------------- | -------------- |
| `app_location`    | `./`           |
| `api_location`    | `build/server` |
| `output_location` | `build/static` |


- Deploy


