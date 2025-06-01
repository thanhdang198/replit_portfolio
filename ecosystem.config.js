module.exports = {
  apps: [{
    name: 'portf',
    script: 'dist/index.js',
    
    // Environment variables
    env: {
      NODE_ENV: 'production'
    },
    
    // Auto restart settings
    autorestart: true,                    // Tự động restart khi crash
    restart_delay: 1000,                  // Delay 1 giây trước khi restart
    max_restarts: 10,                     // Tối đa 10 lần restart
    min_uptime: '10s',                    // App phải chạy ít nhất 10s mới được coi là stable
    
    // Memory management
    max_memory_restart: '1G',             // Restart nếu RAM vượt quá 1GB
    
    // Error handling
    kill_timeout: 5000,                   // Timeout 5s để kill process
    listen_timeout: 3000,                 // Timeout 3s để listen port
    
    // Logging
    log_file: './logs/combined.log',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    
    // Other settings
    instances: 1,                         // Số instances (có thể set 'max' để dùng tất cả CPU cores)
    exec_mode: 'fork',                    // Mode chạy: 'fork' hoặc 'cluster'
    watch: false,                         // Không watch file changes trong production
    ignore_watch: ['node_modules', 'logs'], // Ignore folders khi watch = true
    
    // Advanced restart strategies
    exp_backoff_restart_delay: 100,       // Exponential backoff delay
    
    // Health check (nếu app có health endpoint)
    // health_check_grace_period: 3000,
    // health_check_fatal_exceptions: true
  }]
}