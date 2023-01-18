server {
        listen 80;
        listen [::]:80;

        root /var/www/pdagro;
        index index.html index.htm index.nginx-debian.html;

        server_name pdagro.com www.pdagro.com;

        location / {
                try_files $uri $uri/ =404;
        }
}
