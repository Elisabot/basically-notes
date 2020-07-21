FOLLOW THIS GUIDE
http://meteortips.com/deployment-tutorial/digitalocean-part-1/

meteor app deployment notes:

Digital Ocean for hosting
Porkbun for domain management

looking at deployment tool 
	https://github.com/zodern/meteor-up

which requires a specific docker image for our version of meteor (1.10.2)
	http://meteor-up.com/docs#meteor-support
the closest version supports mtr 1.9, we may need to downgrade our mtr one version to use this image (note in autogen config file say it's .10 compatible)

docker image 
	abernix/meteord:node-12-base

how to use mup 

install mup globally
`npm install -g mup`

```
cd my-app-folder
mkdir .deploy
cd .deploy
mup init