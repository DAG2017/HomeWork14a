$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('agile\Login.feature');
formatter.feature({
  "line": 2,
  "name": "user should be able to login so that user can access his/her account",
  "description": "",
  "id": "user-should-be-able-to-login-so-that-user-can-access-his/her-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@full"
    }
  ]
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "user-should-be-able-to-login-so-that-user-can-access-his/her-account;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@right"
    },
    {
      "line": 1,
      "name": "@full"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter Username as \"admin\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be able to login successfully and see welcome as \"Welcome admin\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HookTest.userIsOnLoginPage()"
});
formatter.result({
  "duration": 1418811533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    },
    {
      "val": "admin",
      "offset": 48
    }
  ],
  "location": "HookTest.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 1684716780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome admin",
      "offset": 62
    }
  ],
  "location": "HookTest.userShouldBeAbleToLoginSuccessfullyAndSeeWelcomeAs(String)"
});
formatter.result({
  "duration": 54257142,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "user-should-be-able-to-login-so-that-user-can-access-his/her-account;user-should-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@right"
    },
    {
      "line": 1,
      "name": "@full"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter Username as \"Jagdish\" and Password as \"test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be able to login successfully and see welcome as \"Welcome jagdish\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HookTest.userIsOnLoginPage()"
});
formatter.result({
  "duration": 1360553364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jagdish",
      "offset": 24
    },
    {
      "val": "test123",
      "offset": 50
    }
  ],
  "location": "HookTest.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 1570197588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome jagdish",
      "offset": 62
    }
  ],
  "location": "HookTest.userShouldBeAbleToLoginSuccessfullyAndSeeWelcomeAs(String)"
});
formatter.result({
  "duration": 62170036,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should NOT be able to login with invalid credentials",
  "description": "",
  "id": "user-should-be-able-to-login-so-that-user-can-access-his/her-account;user-should-not-be-able-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@wrong"
    },
    {
      "line": 1,
      "name": "@full"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enter Username as \"username1\" and Password as \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user should not login",
  "keyword": "Then "
});
formatter.match({
  "location": "HookTest.userIsOnLoginPage()"
});
formatter.result({
  "duration": 1491559996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 24
    },
    {
      "val": "password1",
      "offset": 52
    }
  ],
  "location": "HookTest.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 766790605,
  "status": "passed"
});
formatter.match({
  "location": "HookTest.userShouldNotLogin()"
});
formatter.result({
  "duration": 53962717,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should NOT be able to login with invalid credentials",
  "description": "",
  "id": "user-should-be-able-to-login-so-that-user-can-access-his/her-account;user-should-not-be-able-to-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@wrong"
    },
    {
      "line": 1,
      "name": "@full"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enter Username as \"username2\" and Password as \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user should not login",
  "keyword": "Then "
});
formatter.match({
  "location": "HookTest.userIsOnLoginPage()"
});
formatter.result({
  "duration": 1572547210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username2",
      "offset": 24
    },
    {
      "val": "password2",
      "offset": 52
    }
  ],
  "location": "HookTest.userEnterUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 802358538,
  "status": "passed"
});
formatter.match({
  "location": "HookTest.userShouldNotLogin()"
});
formatter.result({
  "duration": 50448548,
  "status": "passed"
});
});