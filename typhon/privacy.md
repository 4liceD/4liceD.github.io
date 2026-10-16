# Privacy Policy

**Last updated: `16.10.2026`**

This policy explains what `Typhon` does with information when you use it on Discord or sign in
to its control panel at `https://yucky.shupogaki.cc`. `Typhon` is operated by `4cd`. You can reach us at
`4liced@4liced.com` or in our support server at `https://discord.gg/7peUVemWgS`.

`Typhon` is a server management and moderation bot. Almost everything it does is switched off
until an administrator of a Discord server turns it on, and what it collects in any given server
depends on which features that server's administrators have chosen to use.

## The short version

| What | Do we store it? | For how long |
| --- | --- | --- |
| A server's settings | Yes | Until deleted by the server's staff or on request |
| Moderation records: warnings, mutes, bans | Yes | Until the server's staff delete them |
| Saved message logs | Yes | Deleted automatically after 30 days |
| Support ticket records | Yes | Decided by each server |
| Your roles, nickname and other member details | No | Used, then discarded |
| Your online status and activity | No | Used, then discarded |
| Control panel sign-in session | Yes | Until you sign out or it expires |

We do not sell your information, we do not use it for advertising, and we do not use it to train
any machine learning or AI model.

## What information the bot receives

In a server where `Typhon` is present, Discord sends it:

- **Your membership of that server.** Your user ID, username and display name, your nickname there,
  the roles you hold, when you joined, and notice when you join, leave, or any of that changes.
  This is used for automatic roles, welcome and goodbye messages, captcha verification, keeping a
  mute in place if you leave and rejoin, and moderation rules that check the name someone joins
  with.
- **Your online status and what you are doing**, including a game you are playing or a stream you
  have started. This is used only to announce when a member of the server starts a livestream and
  to give them a role while they are live, and to show your current status if a moderator looks you
  up.
- **The messages you send in that server**, including their text, attachments and embeds. This is
  used to run the server's automatic moderation rules, to save message logs, and to run custom
  commands that the server has set to respond to what members say.

Receiving information is not the same as keeping it. Most of what the bot sees is examined, acted
on, and immediately discarded. The next two sections set out exactly what is kept and what is
not.

## What we store

**Server settings.** Everything a server's administrators configure: which features are on, the
rules they have written, the channels and roles those features use, and the message templates they
have created. This includes the IDs of members who have been exempted from a rule or granted a
particular permission. Kept until the server's staff delete them. Removing the bot from a server
does not by itself erase its settings, so that a server which adds the bot again does not have to
set everything up from scratch.

**Moderation records.** When staff warn, mute, ban, or time out a member, we record who was acted
on, who did it, the reason given, and when. We also record punishments scheduled to end later, such
as a mute that expires in an hour, so we know when to lift them. Kept until the server's staff
delete them.

**Message logs.** We store the text of messages along with who wrote them and when, in three
cases. First, when a moderation action is taken against someone: if they are banned, kicked, muted
or warned, or if they are reported, we save a short snapshot of the surrounding conversation,
currently the last 100 messages in that channel, and attach it to the moderation record so that
staff reviewing the decision or handling an appeal can see the context. Second, when a moderator
saves a conversation on purpose in order to investigate something. Third, where a server has turned
on deleted-message logging. Storing the text is the purpose of the feature: it exists so staff can
still see what was said after a message has been deleted or edited. A server's excluded channels
are respected in all three cases. **Message logs are deleted automatically once they are 30 days
old**, whatever else happens. Staff can also delete them sooner.

**Support ticket records.** When a ticket is closed, the conversation is saved so staff have a
record, either posted into a channel the server chooses or attached as a text file. From that point
it lives in that server, under that server's control.

**Control panel sessions.** When you sign in at `http://yucky.shupogaki.cc` with your Discord account, we store a
session so you stay signed in, along with the access token Discord gives us to read which servers
you can manage. The session ends when you sign out or when it expires. We use cookies only for
signing in and for security, not for advertising or tracking you across other sites.

## What we do not store

**Member details.** Your roles, nickname, join date and similar details are used to carry out
whatever the server has configured, and then discarded. We do not keep a member database.

**Your status and activity.** What you are playing, listening to, or streaming is never written to
our database or to disk. We do not build profiles of what you do, we do not measure how long you
spend in a game, and nothing in the product shows your past activity. The one exception is a short list of who is currently
livestreaming, which exists purely so the same stream is not announced twice, and you are removed
from it the moment your stream ends.

**Message content, beyond the two features above.** Automatic moderation checks a message against a
server's rules and keeps no copy of it. If a rule is broken we record which rule and which member,
not what was said. Custom commands, command handling, reputation and timezone conversion all read
a message, act on it, and discard it.

## Who else receives information

We do not sell your information, share it for advertising or marketing, or give it to anyone else,
except:

- **Scam and phishing link checking.** Where a server has enabled it, web addresses found in
  messages are checked against SinkingYachts, BitFlow and Google Safe Browsing so they can tell us
  whether a link is dangerous. Only the domain or address is sent. No message text, no information
  about who wrote it, and no information about which server it came from.
- **Our hosting providers**, who hold the servers and databases this service runs on, in
  `Germany`.
- **Where the law requires it**, or where it is necessary to protect the safety of our users.

## Choosing what is collected

These controls belong to each server and its administrators, not to individual members. There is no
single switch that opts one person out everywhere, and we would rather say so than imply otherwise.

- Every feature that reads messages is off until an administrator turns it on.
- Message logging can be limited by channel, either by excluding particular channels or by
  restricting logging to an approved list, so a server can set aside spaces that are never logged.
- Moderation rules can be set to ignore particular channels, whole categories, threads, bots, and
  members holding a given role.
- Saved logs are access-controlled: administrators choose which roles may read them, and whether
  deleted messages are visible to anyone who is not a moderator.

If you do not want your messages processed in a particular server, ask that server's administrators
to exclude the channels you use or exempt a role you hold.

## How to have your information deleted

- **Server staff** can delete message logs, moderation records and ticket records for their server
  at any time through the control panel or the bot's commands.
- **Removing the bot** from a server does not by itself delete anything, so that a server which
  adds it again keeps its configuration.
- **Server owners and individual members** can contact us at `4liced@4liced.com` about data we hold.
  Include your Discord user ID, or your server's ID, so that we can identify what you mean.

Some limits are worth stating plainly. Where a record belongs to a server rather than to an
individual, such as a warning issued by that server's staff, it is that server's moderation
history, and requests about it are generally a matter for that server's administrators. Ticket
records already posted into a server's channel are under that server's control, not ours.

## Your rights

Depending on where you live, you may have the right to know what we hold about you, to have it
corrected or deleted, to object to how we use it, and to receive a copy. Contact
`4liced@4liced.com` to exercise any of these. You also have the right to complain to your local data
protection authority.

## Security

We restrict access to stored data to the people who operate the service. Saved message logs are
additionally protected inside each server: administrators choose which roles may read them, and
whether deleted messages are visible to anyone who is not a moderator. No system is perfectly
secure, but we take reasonable steps to protect what we hold.

## Changes

We may update this policy. The date at the top tells you when it last changed, and we will announce
significant changes in our support server.
