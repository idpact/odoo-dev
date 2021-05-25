module.exports = {
  command: 'session <command>',

};


  .command('')
  .description('Manage sessions')
  .option('')
  .command('create <name>', 'creates a workspace')
  .option('--path <folder>', 'root directory of the workspace ', '~/odoo-dev/default')
  .option('--host <host>', 'workspace hostname', 'default.localhost')
  .option('--repo <git>', 'git repository url')
  .option('')
  .command('mount <name>', 'mounts a workspace on a session')
  .option('--version <int>', 'odoo version to be used', '12')
  .option('--branch <string>', 'the git branch to be checkout')
  .option('--key <string>', 'unique identifier for the session')
  .option('')
  .command('status <name>.<key>', 'gets the status of the specified session')
  .action(function(command, options) {
    console.log(action);
  })
