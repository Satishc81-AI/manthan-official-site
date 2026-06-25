/**
 * Release configuration — update this file for each new release.
 *
 * Download URLs point to GitHub Releases:
 *   https://github.com/{owner}/{repo}/releases/download/{tag}/{filename}
 *
 * To publish a new release:
 *   1. Go to https://github.com/SagarKapase/unilink_web/releases/new
 *   2. Create tag (e.g. v2.4.1)
 *   3. Upload the .exe, .dmg, .AppImage binaries
 *   4. Publish the release
 *   5. Update the version and tag below
 */

const GITHUB_OWNER = "SagarKapase";
const GITHUB_REPO = "unilink_web";
const RELEASE_TAG = "v2.4.1";

const BASE_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/${RELEASE_TAG}`;

export type PlatformId = "windows" | "macos" | "linux";

export interface PlatformInfo {
  name: string;
  arch: string;
  icon: string;
  file: string;
  size: string;
  url: string;
}

export const RELEASE = {
  version: "2.4.1",
  tag: RELEASE_TAG,
  date: "2026-05-15",
  releaseNotesUrl: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/tag/${RELEASE_TAG}`,
  allReleasesUrl: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases`,
  platforms: {
    windows: {
      name: "Windows",
      arch: "x64",
      icon: "desktop_windows",
      file: "UniLink-Setup.exe",
      size: "82 MB",
      url: `${BASE_URL}/UniLink-Setup.exe`,
    },
    macos: {
      name: "macOS",
      arch: "Apple Silicon / Intel",
      icon: "laptop_mac",
      file: "UniLink.dmg",
      size: "78 MB",
      url: `${BASE_URL}/UniLink.dmg`,
    },
    linux: {
      name: "Linux",
      arch: "x64 / ARM64",
      icon: "terminal",
      file: "UniLink.AppImage",
      size: "85 MB",
      url: `${BASE_URL}/UniLink.AppImage`,
    },
  } satisfies Record<PlatformId, PlatformInfo>,
};

export const SYSTEM_REQUIREMENTS: Record<
  PlatformId,
  { os: string; ram: string; disk: string; extras: string }
> = {
  windows: {
    os: "Windows 10 (64-bit) or later",
    ram: "4 GB minimum, 8 GB recommended",
    disk: "500 MB available space",
    extras: ".NET 6.0 Runtime (bundled)",
  },
  macos: {
    os: "macOS 12 Monterey or later",
    ram: "4 GB minimum, 8 GB recommended",
    disk: "500 MB available space",
    extras: "Universal binary (Apple Silicon + Intel)",
  },
  linux: {
    os: "Ubuntu 20.04+, Fedora 36+, or equivalent",
    ram: "4 GB minimum, 8 GB recommended",
    disk: "500 MB available space",
    extras: "glibc 2.31+, FUSE (for AppImage)",
  },
};

export const INSTALL_METHODS = [
  { label: "winget", icon: "desktop_windows", command: "winget install UniLink.UniLink" },
  { label: "Homebrew Cask", icon: "laptop_mac", command: "brew install --cask unilink" },
  { label: "Snap", icon: "terminal", command: "sudo snap install unilink" },
  { label: "Flatpak", icon: "deployed_code", command: "flatpak install flathub com.unilink.UniLink" },
] as const;

export const CHANGELOG_HIGHLIGHTS = [
  "Multi-model routing with intelligent fallback chains",
  "Native Apple Silicon support for M1 / M2 / M3 / M4",
  "Real-time token usage and cost tracking dashboard",
  "GGUF model hot-loading without server restart",
  "OpenAI-compatible API endpoint for drop-in replacement",
  "Configurable rate limiting and request queuing",
] as const;

export const DOWNLOAD_MATRIX: Record<
  PlatformId,
  {
    buttons: { label: string; sublabel: string }[];
    formats: { name: string; arches: string[] }[];
  }
> = {
  windows: {
    buttons: [{ label: "Windows", sublabel: "Windows 10, 11" }],
    formats: [
      { name: "User Installer", arches: ["x64", "Arm64"] },
      { name: "System Installer", arches: ["x64", "Arm64"] },
      { name: ".zip", arches: ["x64", "Arm64"] },
      { name: "CLI", arches: ["x64", "Arm64"] },
    ],
  },
  linux: {
    buttons: [
      { label: ".deb", sublabel: "Debian, Ubuntu" },
      { label: ".rpm", sublabel: "Red Hat, Fedora" },
    ],
    formats: [
      { name: ".deb", arches: ["x64", "Arm64"] },
      { name: ".rpm", arches: ["x64", "Arm64"] },
      { name: ".tar.gz", arches: ["x64", "Arm64"] },
      { name: ".AppImage", arches: ["x64", "Arm64"] },
      { name: "Snap", arches: ["Snap Store"] },
      { name: "CLI", arches: ["x64", "Arm64"] },
    ],
  },
  macos: {
    buttons: [{ label: "Mac", sublabel: "macOS 12.0+" }],
    formats: [
      { name: ".dmg", arches: ["Intel chip", "Apple silicon", "Universal"] },
      { name: "CLI", arches: ["Intel chip", "Apple silicon"] },
    ],
  },
};
