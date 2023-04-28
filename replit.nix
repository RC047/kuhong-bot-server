{ pkgs }: {
    deps = [
      pkgs.nano
      pkgs.nodejs-18_x
      pkgs.nodePackages.typescript-language-server
      pkgs.yarn
      pkgs.libuuid
      pkgs.replitPackages.jest
    ];
    env = {
      LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];
    };
}
