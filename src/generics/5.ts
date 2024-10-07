export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
   }
   type roles = Record<UserRole, string>;
   // Замініть наступний код на версію за допомогою Record
   const RoleDescription:roles = {
    [UserRole.admin]: 'Admin User',
   [UserRole.editor]: 'Editor User',
   [UserRole.guest]: 'Guest User',
   };
  