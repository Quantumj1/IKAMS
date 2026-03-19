const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'ikams',
  location: 'us-west2'
};
exports.connectorConfig = connectorConfig;

const listAllDocumentsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllDocuments');
}
listAllDocumentsRef.operationName = 'ListAllDocuments';
exports.listAllDocumentsRef = listAllDocumentsRef;

exports.listAllDocuments = function listAllDocuments(dc) {
  return executeQuery(listAllDocumentsRef(dc));
};

const getMyUploadedDocumentsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyUploadedDocuments');
}
getMyUploadedDocumentsRef.operationName = 'GetMyUploadedDocuments';
exports.getMyUploadedDocumentsRef = getMyUploadedDocumentsRef;

exports.getMyUploadedDocuments = function getMyUploadedDocuments(dc) {
  return executeQuery(getMyUploadedDocumentsRef(dc));
};

const createNewDocumentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewDocument', inputVars);
}
createNewDocumentRef.operationName = 'CreateNewDocument';
exports.createNewDocumentRef = createNewDocumentRef;

exports.createNewDocument = function createNewDocument(dcOrVars, vars) {
  return executeMutation(createNewDocumentRef(dcOrVars, vars));
};

const approveDocumentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ApproveDocument', inputVars);
}
approveDocumentRef.operationName = 'ApproveDocument';
exports.approveDocumentRef = approveDocumentRef;

exports.approveDocument = function approveDocument(dcOrVars, vars) {
  return executeMutation(approveDocumentRef(dcOrVars, vars));
};
