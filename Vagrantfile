# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"
LOCAL_DEV_IP = "192.168.50.10"
NO_PROXY = "resume." + LOCAL_DEV_IP + ".nip.io"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  if Vagrant.has_plugin?("vagrant-proxyconf")
    config.proxy.no_proxy = "localhost,127.0.0.1," + NO_PROXY
  end

  config.vm.hostname = "trymuffinresume"
  config.vm.box = "centos/7"
  config.ssh.insert_key = false

  config.vm.provision "shell", path: "bootstrap.sh"
  config.vm.network "private_network", ip: LOCAL_DEV_IP
  config.vm.synced_folder ".", "/home/vagrant/sync", disabled: true
  config.vm.synced_folder ".", "/home/vagrant/src", type: "virtualbox", mount_options: ["dmode=775,fmode=664"]

  config.vm.provider "virtualbox" do |vb|
    # Customize the amount of memory on the VM:
    vb.name = "Try Muffin Resume"
    vb.memory = "1024"
    vb.cpus = "1"
  end
end
