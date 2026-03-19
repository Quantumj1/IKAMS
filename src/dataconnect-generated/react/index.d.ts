import { ListAllDocumentsData, GetMyUploadedDocumentsData, CreateNewDocumentData, CreateNewDocumentVariables, ApproveDocumentData, ApproveDocumentVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useListAllDocuments(options?: useDataConnectQueryOptions<ListAllDocumentsData>): UseDataConnectQueryResult<ListAllDocumentsData, undefined>;
export function useListAllDocuments(dc: DataConnect, options?: useDataConnectQueryOptions<ListAllDocumentsData>): UseDataConnectQueryResult<ListAllDocumentsData, undefined>;

export function useGetMyUploadedDocuments(options?: useDataConnectQueryOptions<GetMyUploadedDocumentsData>): UseDataConnectQueryResult<GetMyUploadedDocumentsData, undefined>;
export function useGetMyUploadedDocuments(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyUploadedDocumentsData>): UseDataConnectQueryResult<GetMyUploadedDocumentsData, undefined>;

export function useCreateNewDocument(options?: useDataConnectMutationOptions<CreateNewDocumentData, FirebaseError, CreateNewDocumentVariables>): UseDataConnectMutationResult<CreateNewDocumentData, CreateNewDocumentVariables>;
export function useCreateNewDocument(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewDocumentData, FirebaseError, CreateNewDocumentVariables>): UseDataConnectMutationResult<CreateNewDocumentData, CreateNewDocumentVariables>;

export function useApproveDocument(options?: useDataConnectMutationOptions<ApproveDocumentData, FirebaseError, ApproveDocumentVariables>): UseDataConnectMutationResult<ApproveDocumentData, ApproveDocumentVariables>;
export function useApproveDocument(dc: DataConnect, options?: useDataConnectMutationOptions<ApproveDocumentData, FirebaseError, ApproveDocumentVariables>): UseDataConnectMutationResult<ApproveDocumentData, ApproveDocumentVariables>;
