import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'ikams',
  location: 'us-west2'
};

export const listAllDocumentsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllDocuments');
}
listAllDocumentsRef.operationName = 'ListAllDocuments';

export function listAllDocuments(dc) {
  return executeQuery(listAllDocumentsRef(dc));
}

export const getMyUploadedDocumentsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyUploadedDocuments');
}
getMyUploadedDocumentsRef.operationName = 'GetMyUploadedDocuments';

export function getMyUploadedDocuments(dc) {
  return executeQuery(getMyUploadedDocumentsRef(dc));
}

export const createNewDocumentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewDocument', inputVars);
}
createNewDocumentRef.operationName = 'CreateNewDocument';

export function createNewDocument(dcOrVars, vars) {
  return executeMutation(createNewDocumentRef(dcOrVars, vars));
}

export const approveDocumentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ApproveDocument', inputVars);
}
approveDocumentRef.operationName = 'ApproveDocument';

export function approveDocument(dcOrVars, vars) {
  return executeMutation(approveDocumentRef(dcOrVars, vars));
}

