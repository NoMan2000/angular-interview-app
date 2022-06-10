# AngularDemo

The goal of this app is to create a very simple demo.  The goal is to create a form which enables users to create, edit, update, and delete a pool game between two players.

The form should be able to list all of the games played between two players.  There are two primary routes.  The first route is `/player` and the second is `/games`.

The games path lists a bunch of different games.  The user can add, edit, or delete those games.

When updating a game, a valid score must be entered.

Deleting a game shows a confirmation box that asks the user to confirm.

The `/player` route allows the user to change the names of the two players.

## Rubric

The goal is to for this to be a simple, yet still functionally useful app to test users against.  You are not expected to complete all of it.

When solving this demo, the actual solutions are almost irrelevant.  We would much rather see how you go about solving the problems and how you work through the problems than see a successful solution without understanding your methodology.

There are stubbed methods in the `.ts` sections of each folder.  If you can find an alternate solution, then you may use that.

The `storageService` is a simple localStorage solution for persisting changes throughout the page.  It already has the methods you will need to successfully solve each section.
