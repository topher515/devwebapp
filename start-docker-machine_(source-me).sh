docker-machine start default;
echo "Setting env vars...";
eval $(docker-machine env default);
echo 'Machine "default" status...'; 
docker-machine status default;
docker-machine ip default; 