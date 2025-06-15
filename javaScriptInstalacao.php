

'node'
https://nodejs.org/en/

'yarn - instalação'
https://linuxize.com/post/how-to-install-yarn-on-ubuntu-20-04/

Installing Yarn on Ubuntu

Installing Yarn on Ubuntu is fairly straightforward. We’ll enable the official Yarn repository, import the repository GPG key, and install the package. The repository is consistently maintained and provides the most up-to-date version.

Import the repository’s GPG key and add the Yarn APT repository to your system by running the following commands:

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

Once the repository is enabled, update the package list, and install Yarn.



sudo apt update
sudo apt install --no-install-recommends yarn
yarn --version




