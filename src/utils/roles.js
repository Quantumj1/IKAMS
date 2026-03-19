export function canUpload(role) {
  return role === 'student' || role === 'lecturer';
}

export function isAdmin(role) {
  return role === 'admin';
}

export function getRoleColor(role) {
  switch (role) {
    case 'admin': return 'bg-red-500';
    case 'lecturer': return 'bg-blue-500';
    case 'student': return 'bg-green-500';
    default: return 'bg-gray-500';
  }
}
