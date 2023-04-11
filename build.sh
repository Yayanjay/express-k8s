# remove prev container & image
docker rm -f backend-fazztrack
docker rmi -f zayyanabdillah/backend-fazztrack
# build docker
echo "========== build image =========="
docker build -t zayyanabdillah/backend-fazztrack .
# push image
echo "========== push image =========="
docker push zayyanabdillah/backend-fazztrack
