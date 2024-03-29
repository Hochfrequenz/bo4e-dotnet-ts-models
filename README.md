# bo4e-dotnet-ts-models

This repository contains the NPM package [`bo4e-dotnet-ts-models`](https://www.npmjs.com/package/bo4e-dotnet-ts-models).
The package contains typescript interfaces that are inherently consistent with the [BO4E-dotnet](https://github.com/Hochfrequenz/bo4E-dotnet/) data model which is used by many Hochfrequenz services (namely transformer.bee/edifact-bo4e-converter).

This repository contains no logic, just types for ease of use in any frontend project.

The files in [src](src/) are **completly autogenerated** from [JSON Schemas](https://github.com/Hochfrequenz/BO4E-dotnet/tree/main/json-schema-files), so they're inherently consistent with the BO4E.NET data model. Any push to the C# repos `json-schema-files` directory [creates](https://github.com/Hochfrequenz/BO4E-dotnet/blob/main/.github/workflows/generate_ts_models.yml) a commit in this repository.

### Installation

```bash
npm install bo4e-dotnet-ts-models
```

## Release Workflow (CI/CD)

- Update the source code (automatically for [`/src`](/src), manually for at least the version bump in [`package.json`](package.json))
- click on "[Draft a new Release](https://github.com/Hochfrequenz/bo4e-dotnet-ts-models/releases/new)" in the right sidebar on Github
- Choose a tag that will be pushed to the selected branch (should be main in most cases)
- Autogenerate Release Notes
