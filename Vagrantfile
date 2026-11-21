Vagrant.configure("2") do |config|

  # Перша віртуальна машина (Web-сервер на базі Ubuntu)
  config.vm.define "web" do |web|
    web.vm.box = "hashicorp/bionic64"
    
    # Налаштування ресурсів для VMware / VirtualBox
    web.provider "vmware_desktop" do |v|
      v.memory = 1024  # 1 GB RAM
      v.cpus   = 1     # 1 ядро CPU
    end
  end

  # Друга віртуальна машина (Database-сервер на базі Debian)
  config.vm.define "db" do |db|
    db.vm.box = "debian/bullseye64"
    
    # Налаштування ресурсів
    db.provider "vmware_desktop" do |v|
      v.memory = 2048  # 2 GB RAM
      v.cpus   = 2     # 2 ядра CPU
    end
  end

end
