type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
   }
   
   export function createOrUpdateUser(initialValues: Partial<User>) {
    // Оновлення користувача
    const defaultUser: User = {
      name:initialValues.name||'',
      surname:initialValues.surname||'',
      email: initialValues.email||'',
      password:initialValues.password||'',
    };
    console.log(defaultUser)
    return {...defaultUser,...initialValues};
   }
   
   createOrUpdateUser({ 
     email:  'user@mail.com', 
     password: 'password123' 
   });
  