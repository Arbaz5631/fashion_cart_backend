module.exports = {
  DB: process.env.DB || 'mongodb+srv://arbaz:arbaz@cluster0.rdvcy.mongodb.net/ARLehngaSaree?retryWrites=true&w=majority',
  PORT: process.env.PORT || '8001',
  IS_CONSOLE_LOG: process.env.IS_CONSOLE_LOG || 'true'
}
