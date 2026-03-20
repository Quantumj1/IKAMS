export function canUpload(role) {
  return role === 'lecturer';
}

export function isAdmin(role) {
  return role === 'admin';
}

export function getRoleColor(role) {
  switch (role) {
    case 'admin': return 'bg-umat-yellow text-black';
    case 'lecturer': return 'bg-umat-green text-white';
    case 'student': return 'bg-umat-blue text-white';
    default: return 'bg-gray-500';
  }
}

// New dashboard components helpers
export function getStudentComponents() {
  return ['Search', 'FilesList'];
}

export function getLecturerComponents() {
  return ['Upload', 'Search', 'FilesList'];
}

export function getAdminComponents() {
  return ['AdminPanel', 'FilesList'];
}

