#!/bin/bash

yum update -y
yum install -y epel-release
yum install -y unzip.x86_64 python-devel python-pip openldap-devel openssl-devel libffi-devel sshpass
pip install pip --upgrade
pip install setuptools --upgrade
pip install ansible

chmod 750 /home/vagrant
setenforce 0

#aescrypt decrypt the key file before running ansible
#ansible-playbook -i src/ansible/hosts-local src/ansible/playbook.yml

#https://resume.192.168.50.10.nip.io
#https://local.resume.192.168.50.10.nip.io

#sudo yum install python-devel
#sudo yum install libevent-devel
#easy_install gevent
#sudo yum install gcc
#yum install git


## ************** NEED TO aescrypt
#