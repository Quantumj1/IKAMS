import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface ApprovalLog_Key {
  id: UUIDString;
  __typename?: 'ApprovalLog_Key';
}

export interface ApproveDocumentData {
  approvalLog_insert: ApprovalLog_Key;
}

export interface ApproveDocumentVariables {
  documentId: UUIDString;
  notes?: string | null;
}

export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateNewDocumentData {
  document_insert: Document_Key;
}

export interface CreateNewDocumentVariables {
  title: string;
  fileUrl: string;
  status: string;
  categoryId: UUIDString;
  description?: string | null;
  tags?: string[] | null;
}

export interface Document_Key {
  id: UUIDString;
  __typename?: 'Document_Key';
}

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

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface ListAllDocumentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllDocumentsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllDocumentsData, undefined>;
  operationName: string;
}
export const listAllDocumentsRef: ListAllDocumentsRef;

export function listAllDocuments(): QueryPromise<ListAllDocumentsData, undefined>;
export function listAllDocuments(dc: DataConnect): QueryPromise<ListAllDocumentsData, undefined>;

interface GetMyUploadedDocumentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyUploadedDocumentsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyUploadedDocumentsData, undefined>;
  operationName: string;
}
export const getMyUploadedDocumentsRef: GetMyUploadedDocumentsRef;

export function getMyUploadedDocuments(): QueryPromise<GetMyUploadedDocumentsData, undefined>;
export function getMyUploadedDocuments(dc: DataConnect): QueryPromise<GetMyUploadedDocumentsData, undefined>;

interface CreateNewDocumentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewDocumentVariables): MutationRef<CreateNewDocumentData, CreateNewDocumentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewDocumentVariables): MutationRef<CreateNewDocumentData, CreateNewDocumentVariables>;
  operationName: string;
}
export const createNewDocumentRef: CreateNewDocumentRef;

export function createNewDocument(vars: CreateNewDocumentVariables): MutationPromise<CreateNewDocumentData, CreateNewDocumentVariables>;
export function createNewDocument(dc: DataConnect, vars: CreateNewDocumentVariables): MutationPromise<CreateNewDocumentData, CreateNewDocumentVariables>;

interface ApproveDocumentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ApproveDocumentVariables): MutationRef<ApproveDocumentData, ApproveDocumentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ApproveDocumentVariables): MutationRef<ApproveDocumentData, ApproveDocumentVariables>;
  operationName: string;
}
export const approveDocumentRef: ApproveDocumentRef;

export function approveDocument(vars: ApproveDocumentVariables): MutationPromise<ApproveDocumentData, ApproveDocumentVariables>;
export function approveDocument(dc: DataConnect, vars: ApproveDocumentVariables): MutationPromise<ApproveDocumentData, ApproveDocumentVariables>;

