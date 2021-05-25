module.exports = {
  command: 'server <command>',
  describe: 'Manage the web server',
  builder: function() {
    
  }
};


program
  .command('')
  .description()
  .option('')
  .command('start', 'starts the web server', { isDefault: true })
  .option('-p, --port <int>', 'Server port', '1337')
  .option('-w, --workers <int>', 'Number of http workers', '2')
  .option('')
  .command('stop', 'stops the server and every session')
  .option('')
  .command('status', 'list server mounted workspaces');
