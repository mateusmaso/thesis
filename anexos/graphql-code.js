function Query_me(request) {
  return request.auth.user;
}

function User_name(user) {
  return user.getName();
}
