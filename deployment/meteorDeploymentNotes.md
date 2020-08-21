THIS GUIDE
http://meteortips.com/deployment-tutorial/digitalocean-part-1/

21.8.20
ssh client config, touch that
precidence of settings: command-line options > .ssh/config > .ssh/ssh_config

This fixed it. https://www.digitalocean.com/community/questions/ssh-copy-id-not-working-permission-denied-publickey
Log in as root
Edit ssh config:
sudo nano /etc/ssh/sshd_config
Change this line:
PasswordAuthentication no
to
PasswordAuthentication yes
Restart daemon:
sudo systemctl restart sshd

Do ssh-copy-id from your local:
ssh-copy-id someuser@<my-ip>

Revert changes to ssh_config if you are security conscious and restart daemon.

20.8.20
taking another run at getting this to build.
something is wrong with ssh and our pubkey

21.7.20
tutorial asks us to generate our config files at root of proj, no prob just make sure the path in ur config gets you to the root dir

when running `mup deploy` we saw
Browserslist: caniuse-lite is outdated. Please run next command `npm update`

20.7.20
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