# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # use ubuntu for box base
  config.vm.box = "chef/ubuntu-14.04"

  # run install script on provision
  config.vm.provision :shell, :path => "vagrant/install.sh"

  # forward default web port for testing
  config.vm.network "forwarded_port", guest: 8080, host: 5555
  # forward default websocket port for testing
  config.vm.network "forwarded_port", guest: 8081, host: 8081
  
  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "5.5.5.5"
end
