# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListAllDocuments*](#listalldocuments)
  - [*GetMyUploadedDocuments*](#getmyuploadeddocuments)
- [**Mutations**](#mutations)
  - [*CreateNewDocument*](#createnewdocument)
  - [*ApproveDocument*](#approvedocument)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListAllDocuments
You can execute the `ListAllDocuments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAllDocuments(): QueryPromise<ListAllDocumentsData, undefined>;

interface ListAllDocumentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllDocumentsData, undefined>;
}
export const listAllDocumentsRef: ListAllDocumentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAllDocuments(dc: DataConnect): QueryPromise<ListAllDocumentsData, undefined>;

interface ListAllDocumentsRef {
  ...
  (dc: DataConnect): QueryRef<ListAllDocumentsData, undefined>;
}
export const listAllDocumentsRef: ListAllDocumentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAllDocumentsRef:
```typescript
const name = listAllDocumentsRef.operationName;
console.log(name);
```

### Variables
The `ListAllDocuments` query has no variables.
### Return Type
Recall that executing the `ListAllDocuments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAllDocumentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAllDocumentsData {
  documents: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    status: string;
    uploadDate: TimestampString;
    fileUrl: string;
    tags?: string[] | null;
    category?: {
      name: string;
    };
      uploader?: {
        displayName: string;
        email: string;
      };
  } & Document_Key)[];
}
```
### Using `ListAllDocuments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAllDocuments } from '@dataconnect/generated';


// Call the `listAllDocuments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAllDocuments();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAllDocuments(dataConnect);

console.log(data.documents);

// Or, you can use the `Promise` API.
listAllDocuments().then((response) => {
  const data = response.data;
  console.log(data.documents);
});
```

### Using `ListAllDocuments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAllDocumentsRef } from '@dataconnect/generated';


// Call the `listAllDocumentsRef()` function to get a reference to the query.
const ref = listAllDocumentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAllDocumentsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.documents);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.documents);
});
```

## GetMyUploadedDocuments
You can execute the `GetMyUploadedDocuments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyUploadedDocuments(): QueryPromise<GetMyUploadedDocumentsData, undefined>;

interface GetMyUploadedDocumentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyUploadedDocumentsData, undefined>;
}
export const getMyUploadedDocumentsRef: GetMyUploadedDocumentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyUploadedDocuments(dc: DataConnect): QueryPromise<GetMyUploadedDocumentsData, undefined>;

interface GetMyUploadedDocumentsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyUploadedDocumentsData, undefined>;
}
export const getMyUploadedDocumentsRef: GetMyUploadedDocumentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyUploadedDocumentsRef:
```typescript
const name = getMyUploadedDocumentsRef.operationName;
console.log(name);
```

### Variables
The `GetMyUploadedDocuments` query has no variables.
### Return Type
Recall that executing the `GetMyUploadedDocuments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyUploadedDocumentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyUploadedDocumentsData {
  documents: ({
    id: UUIDString;
    title: string;
    status: string;
    uploadDate: TimestampString;
    category?: {
      name: string;
    };
  } & Document_Key)[];
}
```
### Using `GetMyUploadedDocuments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyUploadedDocuments } from '@dataconnect/generated';


// Call the `getMyUploadedDocuments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyUploadedDocuments();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyUploadedDocuments(dataConnect);

console.log(data.documents);

// Or, you can use the `Promise` API.
getMyUploadedDocuments().then((response) => {
  const data = response.data;
  console.log(data.documents);
});
```

### Using `GetMyUploadedDocuments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyUploadedDocumentsRef } from '@dataconnect/generated';


// Call the `getMyUploadedDocumentsRef()` function to get a reference to the query.
const ref = getMyUploadedDocumentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyUploadedDocumentsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.documents);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.documents);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewDocument
You can execute the `CreateNewDocument` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewDocument(vars: CreateNewDocumentVariables): MutationPromise<CreateNewDocumentData, CreateNewDocumentVariables>;

interface CreateNewDocumentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewDocumentVariables): MutationRef<CreateNewDocumentData, CreateNewDocumentVariables>;
}
export const createNewDocumentRef: CreateNewDocumentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewDocument(dc: DataConnect, vars: CreateNewDocumentVariables): MutationPromise<CreateNewDocumentData, CreateNewDocumentVariables>;

interface CreateNewDocumentRef {
  ...
  (dc: DataConnect, vars: CreateNewDocumentVariables): MutationRef<CreateNewDocumentData, CreateNewDocumentVariables>;
}
export const createNewDocumentRef: CreateNewDocumentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewDocumentRef:
```typescript
const name = createNewDocumentRef.operationName;
console.log(name);
```

### Variables
The `CreateNewDocument` mutation requires an argument of type `CreateNewDocumentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewDocumentVariables {
  title: string;
  fileUrl: string;
  status: string;
  categoryId: UUIDString;
  description?: string | null;
  tags?: string[] | null;
}
```
### Return Type
Recall that executing the `CreateNewDocument` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewDocumentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewDocumentData {
  document_insert: Document_Key;
}
```
### Using `CreateNewDocument`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewDocument, CreateNewDocumentVariables } from '@dataconnect/generated';

// The `CreateNewDocument` mutation requires an argument of type `CreateNewDocumentVariables`:
const createNewDocumentVars: CreateNewDocumentVariables = {
  title: ..., 
  fileUrl: ..., 
  status: ..., 
  categoryId: ..., 
  description: ..., // optional
  tags: ..., // optional
};

// Call the `createNewDocument()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewDocument(createNewDocumentVars);
// Variables can be defined inline as well.
const { data } = await createNewDocument({ title: ..., fileUrl: ..., status: ..., categoryId: ..., description: ..., tags: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewDocument(dataConnect, createNewDocumentVars);

console.log(data.document_insert);

// Or, you can use the `Promise` API.
createNewDocument(createNewDocumentVars).then((response) => {
  const data = response.data;
  console.log(data.document_insert);
});
```

### Using `CreateNewDocument`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewDocumentRef, CreateNewDocumentVariables } from '@dataconnect/generated';

// The `CreateNewDocument` mutation requires an argument of type `CreateNewDocumentVariables`:
const createNewDocumentVars: CreateNewDocumentVariables = {
  title: ..., 
  fileUrl: ..., 
  status: ..., 
  categoryId: ..., 
  description: ..., // optional
  tags: ..., // optional
};

// Call the `createNewDocumentRef()` function to get a reference to the mutation.
const ref = createNewDocumentRef(createNewDocumentVars);
// Variables can be defined inline as well.
const ref = createNewDocumentRef({ title: ..., fileUrl: ..., status: ..., categoryId: ..., description: ..., tags: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewDocumentRef(dataConnect, createNewDocumentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.document_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.document_insert);
});
```

## ApproveDocument
You can execute the `ApproveDocument` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
approveDocument(vars: ApproveDocumentVariables): MutationPromise<ApproveDocumentData, ApproveDocumentVariables>;

interface ApproveDocumentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ApproveDocumentVariables): MutationRef<ApproveDocumentData, ApproveDocumentVariables>;
}
export const approveDocumentRef: ApproveDocumentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
approveDocument(dc: DataConnect, vars: ApproveDocumentVariables): MutationPromise<ApproveDocumentData, ApproveDocumentVariables>;

interface ApproveDocumentRef {
  ...
  (dc: DataConnect, vars: ApproveDocumentVariables): MutationRef<ApproveDocumentData, ApproveDocumentVariables>;
}
export const approveDocumentRef: ApproveDocumentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the approveDocumentRef:
```typescript
const name = approveDocumentRef.operationName;
console.log(name);
```

### Variables
The `ApproveDocument` mutation requires an argument of type `ApproveDocumentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ApproveDocumentVariables {
  documentId: UUIDString;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `ApproveDocument` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ApproveDocumentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ApproveDocumentData {
  approvalLog_insert: ApprovalLog_Key;
}
```
### Using `ApproveDocument`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, approveDocument, ApproveDocumentVariables } from '@dataconnect/generated';

// The `ApproveDocument` mutation requires an argument of type `ApproveDocumentVariables`:
const approveDocumentVars: ApproveDocumentVariables = {
  documentId: ..., 
  notes: ..., // optional
};

// Call the `approveDocument()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await approveDocument(approveDocumentVars);
// Variables can be defined inline as well.
const { data } = await approveDocument({ documentId: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await approveDocument(dataConnect, approveDocumentVars);

console.log(data.approvalLog_insert);

// Or, you can use the `Promise` API.
approveDocument(approveDocumentVars).then((response) => {
  const data = response.data;
  console.log(data.approvalLog_insert);
});
```

### Using `ApproveDocument`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, approveDocumentRef, ApproveDocumentVariables } from '@dataconnect/generated';

// The `ApproveDocument` mutation requires an argument of type `ApproveDocumentVariables`:
const approveDocumentVars: ApproveDocumentVariables = {
  documentId: ..., 
  notes: ..., // optional
};

// Call the `approveDocumentRef()` function to get a reference to the mutation.
const ref = approveDocumentRef(approveDocumentVars);
// Variables can be defined inline as well.
const ref = approveDocumentRef({ documentId: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = approveDocumentRef(dataConnect, approveDocumentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.approvalLog_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.approvalLog_insert);
});
```

