export interface PortfolioImage { src: string; smallSrc: string; smallWidth: number; width: number; height: number; alt: string; evidence?: { basis: 'film-frame' | 'same-publication' | 'visual-match' | 'unassigned'; videoSrc?: string; note: string } }
export interface ProjectVideo { provider: 'native'; title: string; url: string; width: number; height: number; src: string; poster?: PortfolioImage }
export interface Project { id: string; slug: string; title: string; thumbnail: PortfolioImage; images: PortfolioImage[]; videos: ProjectVideo[]; credit: string; facts: { label: string; value: string }[]; sources: { label: string; url: string }[]; attribution: { basis: 'explicit-credit' | 'own-portfolio'; source: string; note: string }; portrait: boolean; scope: 'campaign' | 'study' }
export const projects: Project[] = [
  {
    "id": "black-and-yellow-suit",
    "slug": "proud-zero-gravity",
    "title": "Proud — Zero Gravity",
    "thumbnail": {
      "src": "/images/work/black-and-yellow-suit/image-1.webp",
      "smallSrc": "/images/work/black-and-yellow-suit/image-1-480.webp",
      "smallWidth": 391,
      "width": 1170,
      "height": 1435,
      "alt": "Black & yellow jumpsuit — photograph 1",
      "evidence": {
        "basis": "unassigned",
        "note": "No advert attached; no campaign association inferred."
      }
    },
    "images": [
      {
        "src": "/images/work/black-and-yellow-suit/image-1.webp",
        "smallSrc": "/images/work/black-and-yellow-suit/image-1-480.webp",
        "smallWidth": 391,
        "width": 1170,
        "height": 1435,
        "alt": "Black & yellow jumpsuit — wardrobe photograph 1",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/proud-zero-gravity-hd.mp4",
          "note": "Dušan’s Proud carousel compared against VCCP’s Zero Gravity TVC: matching black suits, yellow centre zip/upper sleeves/knees and white lower sleeves/legs. Fitting, garment and pattern images are published together with the matching Proud campaign artwork. Agency independently confirms client and campaign name."
        }
      },
      {
        "src": "/images/work/black-and-yellow-suit/proud-fitting-higher-resolution.webp",
        "smallSrc": "/images/work/black-and-yellow-suit/proud-fitting-higher-resolution-480.webp",
        "smallWidth": 391,
        "width": 1440,
        "height": 1766,
        "alt": "Proud — Zero Gravity — flight suit fitting with yellow zip and contrasting panels",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/proud-zero-gravity-hd.mp4",
          "note": "Dušan’s Proud carousel compared against VCCP’s Zero Gravity TVC: matching black suits, yellow centre zip/upper sleeves/knees and white lower sleeves/legs. Fitting, garment and pattern images are published together with the matching Proud campaign artwork. Agency independently confirms client and campaign name."
        }
      },
      {
        "src": "/images/work/black-and-yellow-suit/image-3.webp",
        "smallSrc": "/images/work/black-and-yellow-suit/image-3-480.webp",
        "smallWidth": 392,
        "width": 899,
        "height": 1102,
        "alt": "Black & yellow jumpsuit — wardrobe photograph 3",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/proud-zero-gravity-hd.mp4",
          "note": "Dušan’s Proud carousel compared against VCCP’s Zero Gravity TVC: matching black suits, yellow centre zip/upper sleeves/knees and white lower sleeves/legs. Fitting, garment and pattern images are published together with the matching Proud campaign artwork. Agency independently confirms client and campaign name."
        }
      },
      {
        "src": "/images/work/black-and-yellow-suit/image-4.webp",
        "smallSrc": "/images/work/black-and-yellow-suit/image-4-480.webp",
        "smallWidth": 391,
        "width": 1305,
        "height": 1600,
        "alt": "Black & yellow jumpsuit — wardrobe photograph 4",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/proud-zero-gravity-hd.mp4",
          "note": "Dušan’s Proud carousel compared against VCCP’s Zero Gravity TVC: matching black suits, yellow centre zip/upper sleeves/knees and white lower sleeves/legs. Fitting, garment and pattern images are published together with the matching Proud campaign artwork. Agency independently confirms client and campaign name."
        }
      },
      {
        "src": "/images/work/black-and-yellow-suit/hd-costume-3.webp",
        "smallSrc": "/images/work/black-and-yellow-suit/hd-costume-3-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Proud — Zero Gravity — black, yellow and white flight suit in the cabin, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/proud-zero-gravity-hd.mp4",
          "note": "Visually reviewed frame at 7.64s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/black-and-yellow-suit/hd-costume-4.webp",
        "smallSrc": "/images/work/black-and-yellow-suit/hd-costume-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Proud — Zero Gravity — yellow centre zip and contrasting sleeve panels, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/proud-zero-gravity-hd.mp4",
          "note": "Visually reviewed frame at 10.45s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/black-and-yellow-suit/proud-published-campaign.webp",
        "smallSrc": "/images/work/black-and-yellow-suit/proud-published-campaign-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 720,
        "alt": "Proud — Zero Gravity — flight suit in the agency’s campaign photograph",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/proud-zero-gravity-hd.mp4",
          "note": "Dušan’s Proud carousel compared against VCCP’s Zero Gravity TVC: matching black suits, yellow centre zip/upper sleeves/knees and white lower sleeves/legs. Fitting, garment and pattern images are published together with the matching Proud campaign artwork. Agency independently confirms client and campaign name."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Proud — Zero Gravity",
        "url": "https://www.vccp.com/czechia/work/proud/zero-gravity",
        "src": "/videos/proud-zero-gravity-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/black-and-yellow-suit/hd-film-poster.webp",
          "smallSrc": "/images/work/black-and-yellow-suit/hd-film-poster-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "Proud — Zero Gravity — film preview",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/proud-zero-gravity-hd.mp4",
            "note": "Poster from the exact full film, preserving its native frame."
          }
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Luboš Rezler"
      },
      {
        "label": "Film production",
        "value": "Boogie Films"
      },
      {
        "label": "Photography",
        "value": "Pavel Hejný"
      },
      {
        "label": "Photo production",
        "value": "Girl & Bear"
      },
      {
        "label": "Agency",
        "value": "VCCP"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DKMA4OnMTef/"
      },
      {
        "label": "Verified full film and production source",
        "url": "https://www.vccp.com/czechia/work/proud/zero-gravity"
      },
      {
        "label": "Campaign credits",
        "url": "https://www.mediar.cz/galerie-reklamy/lehkost-piva-proud-v-kampani-od-vccp-dosahuje-stavu-beztize/"
      }
    ],
    "portrait": true,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DKMA4OnMTef/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "lego-space",
    "slug": "lego-hera-hunter",
    "title": "LEGO — Hera & Hunter",
    "thumbnail": {
      "src": "/images/work/space-suits/image-2.webp",
      "smallSrc": "/images/work/space-suits/image-2-480.webp",
      "smallWidth": 384,
      "width": 1280,
      "height": 1600,
      "alt": "Space-suit photograph 2",
      "evidence": {
        "basis": "visual-match",
        "videoSrc": "/videos/lego-hera-hunter-hd.mp4",
        "note": "Visually matched against Armada’s full Hera & Hunter film: same actors, helmets, silver heart chest panel and coloured tubing, orange suit with dark stripes. The reference is a design reference published with the actual fitting, not a separate finished costume."
      }
    },
    "images": [
      {
        "src": "/images/work/space-suits/image-2.webp",
        "smallSrc": "/images/work/space-suits/image-2-480.webp",
        "smallWidth": 384,
        "width": 1280,
        "height": 1600,
        "alt": "Space-suit photograph 2",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/lego-hera-hunter-hd.mp4",
          "note": "Visually matched against Armada’s full Hera & Hunter film: same actors, helmets, silver heart chest panel and coloured tubing, orange suit with dark stripes. The reference is a design reference published with the actual fitting, not a separate finished costume."
        }
      },
      {
        "src": "/images/work/lego-space/hd-costume-1.webp",
        "smallSrc": "/images/work/lego-space/hd-costume-1-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO — Hera & Hunter — silver helmet, sequinned suit and coloured tubing, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-hera-hunter-hd.mp4",
          "note": "Visually reviewed frame at 10.01s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/lego-space/hd-costume-2.webp",
        "smallSrc": "/images/work/lego-space/hd-costume-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO — Hera & Hunter — orange spacesuit and helmet at the party, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-hera-hunter-hd.mp4",
          "note": "Visually reviewed frame at 24.02s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/lego-space/hd-costume-4.webp",
        "smallSrc": "/images/work/lego-space/hd-costume-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO — Hera & Hunter — the two spacesuits side by side, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-hera-hunter-hd.mp4",
          "note": "Visually reviewed frame at 52.04s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/lego-space/hd-costume-5.webp",
        "smallSrc": "/images/work/lego-space/hd-costume-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO — Hera & Hunter — white helmet and orange suit neckline, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-hera-hunter-hd.mp4",
          "note": "Visually reviewed frame at 66.05s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/lego-space/hd-costume-6.webp",
        "smallSrc": "/images/work/lego-space/hd-costume-6-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO — Hera & Hunter — chest panel, coloured tubes and orange suit, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-hera-hunter-hd.mp4",
          "note": "Visually reviewed frame at 80.06s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/space-suits/image-1.webp",
        "smallSrc": "/images/work/space-suits/image-1-480.webp",
        "smallWidth": 384,
        "width": 1280,
        "height": 1600,
        "alt": "Space-suit photograph 1",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/lego-hera-hunter-hd.mp4",
          "note": "Visually matched against Armada’s full Hera & Hunter film: same actors, helmets, silver heart chest panel and coloured tubing, orange suit with dark stripes. The reference is a design reference published with the actual fitting, not a separate finished costume."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "LEGO — Hera & Hunter",
        "url": "https://www.armadafilms.cz/works/J289XmsG/",
        "src": "/videos/lego-hera-hunter-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/lego-space/hd-film-poster.webp",
          "smallSrc": "/images/work/lego-space/hd-film-poster-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "LEGO — Hera & Hunter — film preview",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/lego-hera-hunter-hd.mp4",
            "note": "Poster from the exact full film, preserving its native frame."
          }
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Peter Harton"
      },
      {
        "label": "Production",
        "value": "The Great Escape"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8llXDgNFOV/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8Ud2fmtEap/"
      },
      {
        "label": "Verified full film and production source",
        "url": "https://www.armadafilms.cz/works/J289XmsG/"
      }
    ],
    "portrait": true,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8llXDgNFOV/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "raiffeisen-spooky-vintage-shopping",
    "slug": "raiffeisen-spooky-vintage-shopping",
    "title": "Raiffeisen — Spooky Vintage Shopping",
    "thumbnail": {
      "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-1.webp",
      "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-1-480.webp",
      "smallWidth": 480,
      "width": 877,
      "height": 657,
      "alt": "Raiffeisen — Spooky Vintage Shopping — photograph 1",
      "evidence": {
        "basis": "visual-match",
        "videoSrc": "/videos/DQKqcPIDGy2.mp4",
        "note": "Compared with the full film: identical distinctive patterned dresses and burgundy coat on the same staircase/set; grey/yellow striped jumper and dark trousers match the opening character. Yellow alternative dress excluded."
      }
    },
    "images": [
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-1.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-1-480.webp",
        "smallWidth": 480,
        "width": 877,
        "height": 657,
        "alt": "Raiffeisen — Spooky Vintage Shopping — wardrobe photograph 1",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/DQKqcPIDGy2.mp4",
          "note": "Compared with the full film: identical distinctive patterned dresses and burgundy coat on the same staircase/set; grey/yellow striped jumper and dark trousers match the opening character. Yellow alternative dress excluded."
        }
      },
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-2.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-2-480.webp",
        "smallWidth": 480,
        "width": 1058,
        "height": 797,
        "alt": "Raiffeisen — Spooky Vintage Shopping — wardrobe photograph 2",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/DQKqcPIDGy2.mp4",
          "note": "Compared with the full film: identical distinctive patterned dresses and burgundy coat on the same staircase/set; grey/yellow striped jumper and dark trousers match the opening character. Yellow alternative dress excluded."
        }
      },
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-4.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-4-480.webp",
        "smallWidth": 480,
        "width": 1170,
        "height": 881,
        "alt": "Raiffeisen — Spooky Vintage Shopping — wardrobe photograph 4",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/DQKqcPIDGy2.mp4",
          "note": "Compared with the full film: identical distinctive patterned dresses and burgundy coat on the same staircase/set; grey/yellow striped jumper and dark trousers match the opening character. Yellow alternative dress excluded."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Raiffeisen — Spooky Vintage Shopping",
        "url": "https://www.instagram.com/p/DQKqcPIDGy2/",
        "src": "/videos/DQKqcPIDGy2.mp4",
        "width": 1048,
        "height": 718
      }
    ],
    "credit": "Wardrobe styling",
    "facts": [
      {
        "label": "Director",
        "value": "Maca Rubio"
      },
      {
        "label": "Production",
        "value": "Stink Prague"
      },
      {
        "label": "Cinematography",
        "value": "Santi Cantillo"
      },
      {
        "label": "Wardrobe",
        "value": "Dušan Bebčák / @u_nik_orn"
      },
      {
        "label": "Agency",
        "value": "LOCCO"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DQKqcPIDGy2/"
      },
      {
        "label": "Director’s portfolio",
        "url": "https://www.kryptonfilmsinternational.com/director/maca_rubio"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/DQKqcPIDGy2/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "talkmore-nokken",
    "slug": "talkmore-nokken",
    "title": "Talkmore — Nøkken",
    "thumbnail": {
      "src": "/images/work/woodland-costumes/image-3.webp",
      "smallSrc": "/images/work/woodland-costumes/image-3-480.webp",
      "smallWidth": 384,
      "width": 1200,
      "height": 1500,
      "alt": "Woodland & historical costumes — photograph 3",
      "evidence": {
        "basis": "visual-match",
        "videoSrc": "/videos/talkmore-nokken-hd.mp4",
        "note": "Compared with the full film: same woodland performer, leafy body, blue/green headpiece and goggles. Unmatched armour photographs remain separate."
      }
    },
    "images": [
      {
        "src": "/images/work/woodland-costumes/image-3.webp",
        "smallSrc": "/images/work/woodland-costumes/image-3-480.webp",
        "smallWidth": 384,
        "width": 1200,
        "height": 1500,
        "alt": "Woodland & historical costumes — wardrobe photograph 3",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/talkmore-nokken-hd.mp4",
          "note": "Compared with the full film: same woodland performer, leafy body, blue/green headpiece and goggles. Unmatched armour photographs remain separate."
        }
      },
      {
        "src": "/images/work/talkmore-nokken/hd-costume-1.webp",
        "smallSrc": "/images/work/talkmore-nokken/hd-costume-1-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 708,
        "alt": "Talkmore — Nøkken — foliage costume in the lake, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/talkmore-nokken-hd.mp4",
          "note": "Visually reviewed frame at 6.01s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/talkmore-nokken/hd-costume-2.webp",
        "smallSrc": "/images/work/talkmore-nokken/hd-costume-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 708,
        "alt": "Talkmore — Nøkken — branch headdress and woven chest detail, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/talkmore-nokken-hd.mp4",
          "note": "Visually reviewed frame at 14.42s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/talkmore-nokken/hd-costume-5.webp",
        "smallSrc": "/images/work/talkmore-nokken/hd-costume-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 708,
        "alt": "Talkmore — Nøkken — foliage costume on the unicorn float, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/talkmore-nokken-hd.mp4",
          "note": "Visually reviewed frame at 39.66s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/talkmore-nokken/hd-costume-6.webp",
        "smallSrc": "/images/work/talkmore-nokken/hd-costume-6-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 708,
        "alt": "Talkmore — Nøkken — headdress, trailing leaves and hand details, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/talkmore-nokken-hd.mp4",
          "note": "Visually reviewed frame at 48.07s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Talkmore — Nøkken",
        "url": "https://www.armadafilms.cz/works/wxzhoPh1/",
        "src": "/videos/talkmore-nokken-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/talkmore-nokken/hd-film-poster.webp",
          "smallSrc": "/images/work/talkmore-nokken/hd-film-poster-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "Talkmore — Nøkken — film preview",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/talkmore-nokken-hd.mp4",
            "note": "Poster from the exact full film, preserving its native frame."
          }
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Stian Johansen"
      },
      {
        "label": "Production",
        "value": "Einar Film / Armada Films"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DFlPHEJMUbB/"
      },
      {
        "label": "Verified full film and production source",
        "url": "https://www.armadafilms.cz/works/wxzhoPh1/"
      }
    ],
    "portrait": true,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DFlPHEJMUbB/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "vypsana-fixa-fakin-party",
    "slug": "vypsana-fixa-fakin-party",
    "title": "Vypsaná fixa — Fakin party",
    "thumbnail": {
      "src": "/images/work/vypsana-fixa-fakin-party/published-39.webp",
      "smallSrc": "/images/work/vypsana-fixa-fakin-party/published-39-480.webp",
      "smallWidth": 480,
      "width": 2400,
      "height": 1599,
      "alt": "vypsana fixa fakin party — published campaign photograph",
      "evidence": {
        "basis": "visual-match",
        "videoSrc": "/videos/fakin-party.mp4",
        "note": "Exact costumes and performers compared with the full Fakin party film from the credited colourist’s portfolio: blue shirt/red sleeveless knitwear, navy suit, party set and ensemble outfits. Publication explicitly credits Dušan Bebčák / @bebcak for wardrobe."
      }
    },
    "images": [
      {
        "src": "/images/work/vypsana-fixa-fakin-party/published-39.webp",
        "smallSrc": "/images/work/vypsana-fixa-fakin-party/published-39-480.webp",
        "smallWidth": 480,
        "width": 2400,
        "height": 1599,
        "alt": "Vypsaná fixa — Fakin party — published campaign image 1",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/fakin-party.mp4",
          "note": "Exact costumes and performers compared with the full Fakin party film from the credited colourist’s portfolio: blue shirt/red sleeveless knitwear, navy suit, party set and ensemble outfits. Publication explicitly credits Dušan Bebčák / @bebcak for wardrobe."
        }
      },
      {
        "src": "/images/work/vypsana-fixa-fakin-party/published-41.webp",
        "smallSrc": "/images/work/vypsana-fixa-fakin-party/published-41-480.webp",
        "smallWidth": 480,
        "width": 2400,
        "height": 1599,
        "alt": "Vypsaná fixa — Fakin party — published campaign image 2",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/fakin-party.mp4",
          "note": "Exact costumes and performers compared with the full Fakin party film from the credited colourist’s portfolio: blue shirt/red sleeveless knitwear, navy suit, party set and ensemble outfits. Publication explicitly credits Dušan Bebčák / @bebcak for wardrobe."
        }
      },
      {
        "src": "/images/work/vypsana-fixa-fakin-party/published-40.webp",
        "smallSrc": "/images/work/vypsana-fixa-fakin-party/published-40-480.webp",
        "smallWidth": 480,
        "width": 2400,
        "height": 1599,
        "alt": "Vypsaná fixa — Fakin party — published campaign image 3",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/fakin-party.mp4",
          "note": "Exact costumes and performers compared with the full Fakin party film from the credited colourist’s portfolio: blue shirt/red sleeveless knitwear, navy suit, party set and ensemble outfits. Publication explicitly credits Dušan Bebčák / @bebcak for wardrobe."
        }
      },
      {
        "src": "/images/work/vypsana-fixa-fakin-party/published-42.webp",
        "smallSrc": "/images/work/vypsana-fixa-fakin-party/published-42-480.webp",
        "smallWidth": 480,
        "width": 2400,
        "height": 1599,
        "alt": "Vypsaná fixa — Fakin party — published campaign image 4",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/fakin-party.mp4",
          "note": "Exact costumes and performers compared with the full Fakin party film from the credited colourist’s portfolio: blue shirt/red sleeveless knitwear, navy suit, party set and ensemble outfits. Publication explicitly credits Dušan Bebčák / @bebcak for wardrobe."
        }
      },
      {
        "src": "/images/work/vypsana-fixa-fakin-party/published-43.webp",
        "smallSrc": "/images/work/vypsana-fixa-fakin-party/published-43-480.webp",
        "smallWidth": 480,
        "width": 2400,
        "height": 1599,
        "alt": "Vypsaná fixa — Fakin party — published campaign image 5",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/fakin-party.mp4",
          "note": "Exact costumes and performers compared with the full Fakin party film from the credited colourist’s portfolio: blue shirt/red sleeveless knitwear, navy suit, party set and ensemble outfits. Publication explicitly credits Dušan Bebčák / @bebcak for wardrobe."
        }
      },
      {
        "src": "/images/work/vypsana-fixa-fakin-party/published-44.webp",
        "smallSrc": "/images/work/vypsana-fixa-fakin-party/published-44-480.webp",
        "smallWidth": 480,
        "width": 2400,
        "height": 1599,
        "alt": "Vypsaná fixa — Fakin party — published campaign image 6",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/fakin-party.mp4",
          "note": "Exact costumes and performers compared with the full Fakin party film from the credited colourist’s portfolio: blue shirt/red sleeveless knitwear, navy suit, party set and ensemble outfits. Publication explicitly credits Dušan Bebčák / @bebcak for wardrobe."
        }
      },
      {
        "src": "/images/work/vypsana-fixa-fakin-party/published-46.webp",
        "smallSrc": "/images/work/vypsana-fixa-fakin-party/published-46-480.webp",
        "smallWidth": 480,
        "width": 2400,
        "height": 1599,
        "alt": "Vypsaná fixa — Fakin party — published campaign image 7",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/fakin-party.mp4",
          "note": "Exact costumes and performers compared with the full Fakin party film from the credited colourist’s portfolio: blue shirt/red sleeveless knitwear, navy suit, party set and ensemble outfits. Publication explicitly credits Dušan Bebčák / @bebcak for wardrobe."
        }
      },
      {
        "src": "/images/work/vypsana-fixa-fakin-party/published-38.webp",
        "smallSrc": "/images/work/vypsana-fixa-fakin-party/published-38-480.webp",
        "smallWidth": 480,
        "width": 2400,
        "height": 1599,
        "alt": "Vypsaná fixa — Fakin party — published campaign image 8",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/fakin-party.mp4",
          "note": "Exact costumes and performers compared with the full Fakin party film from the credited colourist’s portfolio: blue shirt/red sleeveless knitwear, navy suit, party set and ensemble outfits. Publication explicitly credits Dušan Bebčák / @bebcak for wardrobe."
        }
      },
      {
        "src": "/images/work/vypsana-fixa-fakin-party/published-45.webp",
        "smallSrc": "/images/work/vypsana-fixa-fakin-party/published-45-480.webp",
        "smallWidth": 480,
        "width": 2400,
        "height": 1599,
        "alt": "Vypsaná fixa — Fakin party — published campaign image 9",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/fakin-party.mp4",
          "note": "Exact costumes and performers compared with the full Fakin party film from the credited colourist’s portfolio: blue shirt/red sleeveless knitwear, navy suit, party set and ensemble outfits. Publication explicitly credits Dušan Bebčák / @bebcak for wardrobe."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Vypsaná fixa — Fakin party",
        "url": "https://misgena.tv/creation/fakin-party-vypsana-fixa/",
        "src": "/videos/fakin-party.mp4",
        "width": 1440,
        "height": 960,
        "poster": {
          "src": "/images/work/vypsana-fixa-fakin-party/film-cover.webp",
          "smallSrc": "/images/work/vypsana-fixa-fakin-party/film-cover-480.webp",
          "width": 1920,
          "height": 1280,
          "smallWidth": 480,
          "alt": "Vypsaná fixa — Fakin party — film preview"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Tomáš Bláha / Novák & Nguyen"
      },
      {
        "label": "Production",
        "value": "Roar Production / Publicis Praha"
      },
      {
        "label": "Cinematography",
        "value": "Mikuláš Hrdlička"
      },
      {
        "label": "Wardrobe",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Wardrobe assistant",
        "value": "Andrea Konečná"
      },
      {
        "label": "Photography",
        "value": "Petr Jandera"
      }
    ],
    "sources": [
      {
        "label": "Cinematographer’s credited publication",
        "url": "https://www.instagram.com/p/DYXTNEtiB2S/"
      },
      {
        "label": "Full film — colourist’s portfolio",
        "url": "https://misgena.tv/creation/fakin-party-vypsana-fixa/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/DYXTNEtiB2S/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "mcdonalds-cheese-saga",
    "slug": "mcdonalds-cheese-saga",
    "title": "McDonald’s — Cheese Saga",
    "thumbnail": {
      "src": "/images/work/mcdonalds-cheese-saga/hd-costume-2.webp",
      "smallSrc": "/images/work/mcdonalds-cheese-saga/hd-costume-2-480.webp",
      "smallWidth": 480,
      "width": 1920,
      "height": 1080,
      "alt": "McDonald’s — Cheese Saga — blue overshirt and light shirt, frame from the film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/mcdonalds-cheese-saga-hd.mp4",
        "note": "Exact matching director’s cut, 5.5s. Same ball-pit cast, shirts and outfits as the Instagram publication; not a different Cheese Saga campaign."
      }
    },
    "images": [
      {
        "src": "/images/work/mcdonalds-cheese-saga/hd-costume-2.webp",
        "smallSrc": "/images/work/mcdonalds-cheese-saga/hd-costume-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "McDonald’s — Cheese Saga — blue overshirt and light shirt, frame from the film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/mcdonalds-cheese-saga-hd.mp4",
          "note": "Exact matching director’s cut, 5.5s. Same ball-pit cast, shirts and outfits as the Instagram publication; not a different Cheese Saga campaign."
        }
      },
      {
        "src": "/images/work/mcdonalds-cheese-saga/hd-costume-4.webp",
        "smallSrc": "/images/work/mcdonalds-cheese-saga/hd-costume-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "McDonald’s — Cheese Saga — pink blouse, frame from the film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/mcdonalds-cheese-saga-hd.mp4",
          "note": "Exact matching director’s cut, 18s. Same ball-pit cast, shirts and outfits as the Instagram publication; not a different Cheese Saga campaign."
        }
      },
      {
        "src": "/images/work/mcdonalds-cheese-saga/hd-costume-5.webp",
        "smallSrc": "/images/work/mcdonalds-cheese-saga/hd-costume-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "McDonald’s — Cheese Saga — green top and denim dungarees, frame from the film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/mcdonalds-cheese-saga-hd.mp4",
          "note": "Exact matching director’s cut, 25s. Same ball-pit cast, shirts and outfits as the Instagram publication; not a different Cheese Saga campaign."
        }
      },
      {
        "src": "/images/work/mcdonalds-cheese-saga/hd-costume-6.webp",
        "smallSrc": "/images/work/mcdonalds-cheese-saga/hd-costume-6-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "McDonald’s — Cheese Saga — mint shirt and beige cardigan, frame from the film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/mcdonalds-cheese-saga-hd.mp4",
          "note": "Exact matching director’s cut, 31s. Same ball-pit cast, shirts and outfits as the Instagram publication; not a different Cheese Saga campaign."
        }
      },
      {
        "src": "/images/work/mcdonalds-cheese-saga/hd-detail-2.webp",
        "smallSrc": "/images/work/mcdonalds-cheese-saga/hd-detail-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "McDonald’s — Cheese Saga — green knitwear, frame from the film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/mcdonalds-cheese-saga-hd.mp4",
          "note": "Inspected frame from the same full 1080p director’s cut. Cast and ball-pit wardrobes match the original portfolio film."
        }
      },
      {
        "src": "/images/work/mcdonalds-cheese-saga/hd-detail-4.webp",
        "smallSrc": "/images/work/mcdonalds-cheese-saga/hd-detail-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "McDonald’s — Cheese Saga — mint shirt and beige cardigan in motion, frame from the film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/mcdonalds-cheese-saga-hd.mp4",
          "note": "Inspected frame from the same full 1080p director’s cut. Cast and ball-pit wardrobes match the original portfolio film."
        }
      },
      {
        "src": "/images/work/mcdonalds-cheese-saga/hd-detail-5.webp",
        "smallSrc": "/images/work/mcdonalds-cheese-saga/hd-detail-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "McDonald’s — Cheese Saga — patterned knitwear and orange hat, frame from the film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/mcdonalds-cheese-saga-hd.mp4",
          "note": "Inspected frame from the same full 1080p director’s cut. Cast and ball-pit wardrobes match the original portfolio film."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "McDonald’s — Cheese Saga",
        "url": "https://www.ivanardura.com/project/mcdonalds-cheese-saga",
        "src": "/videos/mcdonalds-cheese-saga-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/mcdonalds-cheese-saga/film-cover.webp",
          "smallSrc": "/images/work/mcdonalds-cheese-saga/film-cover-480.webp",
          "width": 1920,
          "height": 1080,
          "smallWidth": 480,
          "alt": "McDonald’s — Cheese Saga — film preview"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Marek Partyš"
      },
      {
        "label": "Production",
        "value": "Bistro Films"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UmP9cNWK3/"
      },
      {
        "label": "Creative portfolio",
        "url": "https://www.ivanardura.com/project/mcdonalds-cheese-saga"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8UmP9cNWK3/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "adidas-you-got-this",
    "slug": "adidas-you-got-this",
    "title": "adidas — You Got This",
    "thumbnail": {
      "src": "/images/work/adidas-you-got-this/hd-detail-4.webp",
      "smallSrc": "/images/work/adidas-you-got-this/hd-detail-4-480.webp",
      "smallWidth": 480,
      "width": 1920,
      "height": 1080,
      "alt": "adidas — You Got This — red football kit and dark training layers, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/adidas-you-got-this-hd.mp4",
        "note": "Reviewed frame at 15s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/adidas-you-got-this/hd-detail-4.webp",
        "smallSrc": "/images/work/adidas-you-got-this/hd-detail-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "adidas — You Got This — red football kit and dark training layers, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/adidas-you-got-this-hd.mp4",
          "note": "Reviewed frame at 15s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      },
      {
        "src": "/images/work/adidas-you-got-this/hd-detail-5.webp",
        "smallSrc": "/images/work/adidas-you-got-this/hd-detail-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "adidas — You Got This — red training top and black padded vest, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/adidas-you-got-this-hd.mp4",
          "note": "Reviewed frame at 19s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      },
      {
        "src": "/images/work/adidas-you-got-this/hd-detail-6.webp",
        "smallSrc": "/images/work/adidas-you-got-this/hd-detail-6-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "adidas — You Got This — red kit and blue football boots, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/adidas-you-got-this-hd.mp4",
          "note": "Reviewed frame at 24s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "adidas — You Got This",
        "url": "https://www.advocadofilms.com/work/",
        "src": "/videos/adidas-you-got-this-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/adidas-you-got-this/hd-detail-4.webp",
          "smallSrc": "/images/work/adidas-you-got-this/hd-detail-4-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "adidas — You Got This — red football kit and dark training layers, film still",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/adidas-you-got-this-hd.mp4",
            "note": "Reviewed frame at 15s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
          }
        }
      }
    ],
    "credit": "Costume design",
    "facts": [
      {
        "label": "Director",
        "value": "Luboš Rezler"
      },
      {
        "label": "Production",
        "value": "ADvocado Films"
      },
      {
        "label": "Cinematography",
        "value": "Tomáš Kotas"
      },
      {
        "label": "Agency",
        "value": "KaspenJVM / 180heartbeats"
      },
      {
        "label": "Costume design",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Costume assistants",
        "value": "Martina O’Neill / Milina Havrlantová"
      },
      {
        "label": "Photography",
        "value": "Alexander Dobrovodský"
      }
    ],
    "sources": [
      {
        "label": "Exact full-resolution source film",
        "url": "https://www.advocadofilms.com/work/"
      },
      {
        "label": "Explicit professional credit",
        "url": "https://vimeo.com/1088383230"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/1088383230",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for costume design."
    }
  },
  {
    "id": "komercni-banka",
    "slug": "komercni-banka",
    "title": "Komerční banka — Eva Adamczyková",
    "thumbnail": {
      "src": "/images/work/komercni-banka/hd-detail-1.webp",
      "smallSrc": "/images/work/komercni-banka/hd-detail-1-480.webp",
      "smallWidth": 480,
      "width": 1920,
      "height": 1080,
      "alt": "Komerční banka — Eva Adamczyková — full red dress in motion, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/komercni-banka-hd.mp4",
        "note": "Reviewed frame at 3s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/komercni-banka/hd-detail-1.webp",
        "smallSrc": "/images/work/komercni-banka/hd-detail-1-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Komerční banka — Eva Adamczyková — full red dress in motion, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/komercni-banka-hd.mp4",
          "note": "Reviewed frame at 3s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      },
      {
        "src": "/images/work/komercni-banka/hd-detail-2.webp",
        "smallSrc": "/images/work/komercni-banka/hd-detail-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Komerční banka — Eva Adamczyková — red dress and shoulder detail, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/komercni-banka-hd.mp4",
          "note": "Reviewed frame at 7s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      },
      {
        "src": "/images/work/komercni-banka/hd-detail-3.webp",
        "smallSrc": "/images/work/komercni-banka/hd-detail-3-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Komerční banka — Eva Adamczyková — high red neckline and gathered fabric, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/komercni-banka-hd.mp4",
          "note": "Reviewed frame at 11s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      },
      {
        "src": "/images/work/komercni-banka/hd-detail-4.webp",
        "smallSrc": "/images/work/komercni-banka/hd-detail-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Komerční banka — Eva Adamczyková — full-length red dress with raised arms, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/komercni-banka-hd.mp4",
          "note": "Reviewed frame at 15s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Komerční banka — Eva Adamczyková",
        "url": "https://www.advocadofilms.com/work/",
        "src": "/videos/komercni-banka-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/komercni-banka/hd-detail-1.webp",
          "smallSrc": "/images/work/komercni-banka/hd-detail-1-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "Komerční banka — Eva Adamczyková — full red dress in motion, film still",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/komercni-banka-hd.mp4",
            "note": "Reviewed frame at 3s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
          }
        }
      }
    ],
    "credit": "Costume design",
    "facts": [
      {
        "label": "Director",
        "value": "Andrii Lagutin"
      },
      {
        "label": "Production",
        "value": "ADvocado Films"
      },
      {
        "label": "Cinematography",
        "value": "Oleksandr Drobilko"
      },
      {
        "label": "Featuring",
        "value": "Eva Adamczyková Samková"
      },
      {
        "label": "Agency",
        "value": "VCCP"
      },
      {
        "label": "Costume design",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Exact full-resolution source film",
        "url": "https://www.advocadofilms.com/work/"
      },
      {
        "label": "Explicit professional credit",
        "url": "https://vimeo.com/1020676248"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/1020676248",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for costume design."
    }
  },
  {
    "id": "rohlik-mothers",
    "slug": "rohlik-mothers",
    "title": "Rohlík — Mothers",
    "thumbnail": {
      "src": "/images/work/rohlik-mothers/final-detail-7-clean.webp",
      "smallSrc": "/images/work/rohlik-mothers/final-detail-7-clean-480.webp",
      "smallWidth": 480,
      "width": 998,
      "height": 600,
      "alt": "Rohlík — Mothers — blue cardigan and white vest, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/rohlik-mothers.mp4",
        "note": "Visually inspected wardrobe frame at 81.15s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/rohlik-mothers/rohlik-mothers-still-2.webp",
        "smallSrc": "/images/work/rohlik-mothers/rohlik-mothers-still-2-480.webp",
        "smallWidth": 480,
        "width": 998,
        "height": 720,
        "alt": "Rohlík — Mothers — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/rohlik-mothers.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/rohlik-mothers/detail-1.webp",
        "smallSrc": "/images/work/rohlik-mothers/detail-1-480.webp",
        "smallWidth": 480,
        "width": 997,
        "height": 720,
        "alt": "Rohlík — Mothers — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/rohlik-mothers.mp4",
          "note": "Visually inspected costume frame at 7.378 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/rohlik-mothers/detail-2.webp",
        "smallSrc": "/images/work/rohlik-mothers/detail-2-480.webp",
        "smallWidth": 480,
        "width": 998,
        "height": 720,
        "alt": "Rohlík — Mothers — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/rohlik-mothers.mp4",
          "note": "Visually inspected costume frame at 29.51 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/rohlik-mothers/final-detail-2-clean.webp",
        "smallSrc": "/images/work/rohlik-mothers/final-detail-2-clean-480.webp",
        "smallWidth": 480,
        "width": 998,
        "height": 720,
        "alt": "Rohlík — Mothers — orange T-shirt and casual teenage wardrobe, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/rohlik-mothers.mp4",
          "note": "Visually inspected wardrobe frame at 20.29s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/rohlik-mothers/final-detail-3-clean.webp",
        "smallSrc": "/images/work/rohlik-mothers/final-detail-3-clean-480.webp",
        "smallWidth": 480,
        "width": 998,
        "height": 720,
        "alt": "Rohlík — Mothers — pink maternity dress and checked shirt, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/rohlik-mothers.mp4",
          "note": "Visually inspected wardrobe frame at 32.28s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/rohlik-mothers/final-detail-7-clean.webp",
        "smallSrc": "/images/work/rohlik-mothers/final-detail-7-clean-480.webp",
        "smallWidth": 480,
        "width": 998,
        "height": 600,
        "alt": "Rohlík — Mothers — blue cardigan and white vest, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/rohlik-mothers.mp4",
          "note": "Visually inspected wardrobe frame at 81.15s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Rohlík — Mothers",
        "url": "https://vimeo.com/1056747428",
        "src": "/videos/rohlik-mothers.mp4",
        "width": 1280,
        "height": 720,
        "poster": {
          "src": "/images/work/rohlik-mothers/rohlik-mothers-still-1.webp",
          "smallSrc": "/images/work/rohlik-mothers/rohlik-mothers-still-1-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "Rohlík — Mothers — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Wardrobe styling",
    "facts": [
      {
        "label": "Director",
        "value": "Maca Rubio"
      },
      {
        "label": "Production",
        "value": "Stink Prague"
      },
      {
        "label": "Cinematography",
        "value": "Santi Cantillo"
      },
      {
        "label": "Agency",
        "value": "B&T"
      },
      {
        "label": "Wardrobe styling",
        "value": "Dušan Bebčák"
      },
      {
        "label": "BTS photography",
        "value": "Stefano Marotta"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DCCz2MCRSd2/"
      },
      {
        "label": "Director’s portfolio",
        "url": "https://www.kryptonfilmsinternational.com/director/maca_rubio"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/DCCz2MCRSd2/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "slovenska-sporitelna",
    "slug": "slovenska-sporitelna",
    "title": "Slovenská sporiteľňa — Everest",
    "thumbnail": {
      "src": "/images/work/slovenska-sporitelna/verified-hd-2.webp",
      "smallSrc": "/images/work/slovenska-sporitelna/verified-hd-2-480.webp",
      "smallWidth": 480,
      "width": 1920,
      "height": 1080,
      "alt": "Slovenská sporiteľňa — Everest — red climbing suit, harness and helmet, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/slsp-climber-hd.mp4",
        "note": "Visually inspected wardrobe frame at 8.55s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/slovenska-sporitelna/verified-hd-2.webp",
        "smallSrc": "/images/work/slovenska-sporitelna/verified-hd-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Slovenská sporiteľňa — Everest — red climbing suit, harness and helmet, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/slsp-climber-hd.mp4",
          "note": "Visually inspected wardrobe frame at 8.55s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/slovenska-sporitelna/verified-hd-3.webp",
        "smallSrc": "/images/work/slovenska-sporitelna/verified-hd-3-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Slovenská sporiteľňa — Everest — red climbing jacket and backpack, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/slsp-climber-hd.mp4",
          "note": "Visually inspected wardrobe frame at 13.53s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/slovenska-sporitelna/verified-hd-4.webp",
        "smallSrc": "/images/work/slovenska-sporitelna/verified-hd-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Slovenská sporiteľňa — Everest — helmet, jacket and harness on the climbing wall, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/slsp-climber-hd.mp4",
          "note": "Visually inspected wardrobe frame at 18.52s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/slovenska-sporitelna/verified-hd-5.webp",
        "smallSrc": "/images/work/slovenska-sporitelna/verified-hd-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Slovenská sporiteľňa — Everest — dark wardrobe and long necklace among the globes, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/slsp-climber-hd.mp4",
          "note": "Visually inspected wardrobe frame at 23.5s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/slovenska-sporitelna/verified-hd-6.webp",
        "smallSrc": "/images/work/slovenska-sporitelna/verified-hd-6-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Slovenská sporiteľňa — Everest — contemporary wardrobe among the books, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/slsp-climber-hd.mp4",
          "note": "Visually inspected wardrobe frame at 28.49s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/slovenska-sporitelna/verified-hd-7.webp",
        "smallSrc": "/images/work/slovenska-sporitelna/verified-hd-7-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Slovenská sporiteľňa — Everest — patterned blouse, burgundy knitwear and beige trousers, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/slsp-climber-hd.mp4",
          "note": "Visually inspected wardrobe frame at 33.12s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Slovenská sporiteľňa — Everest",
        "url": "https://www.bistrofilms.com/work/detail/climber-1",
        "src": "/videos/slsp-climber-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/slovenska-sporitelna/verified-hd-poster.webp",
          "smallSrc": "/images/work/slovenska-sporitelna/verified-hd-poster-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "Slovenská sporiteľňa — Everest — film preview",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/slsp-climber-hd.mp4",
            "note": "Preview from the exact HD film, preserving its native frame."
          }
        }
      }
    ],
    "credit": "Wardrobe styling",
    "facts": [
      {
        "label": "Director",
        "value": "Wolfberg"
      },
      {
        "label": "Production",
        "value": "Bistro Films"
      },
      {
        "label": "Cinematography",
        "value": "Alexander Šurkala"
      },
      {
        "label": "Featuring",
        "value": "Lucia Janicová"
      },
      {
        "label": "Agency",
        "value": "Zaraguza"
      },
      {
        "label": "Wardrobe",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DFh6Sg1smBS/"
      },
      {
        "label": "Campaign",
        "url": "https://www.slsp.sk/sk/aktuality/2024/10/1/kazdy-moze-zdolat-svoj-everest-slovenska-sporitelna-novou-kampanou-povzbudzuje-slovakov"
      },
      {
        "label": "Exact full-resolution production film",
        "url": "https://www.bistrofilms.com/work/detail/climber-1"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/DFh6Sg1smBS/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "budvar-33",
    "slug": "budvar-33",
    "title": "Budvar 33",
    "thumbnail": {
      "src": "/images/work/budvar-33/costume-v3-2.webp",
      "smallSrc": "/images/work/budvar-33/costume-v3-2-480.webp",
      "smallWidth": 270,
      "width": 720,
      "height": 1280,
      "alt": "Budvar 33 — costume in the finished film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/Dc4C_PJt3Q4.mp4",
        "note": "Costume-focused frame at 2.339s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/budvar-33/Dc4C_PJt3Q4-still-3.webp",
        "smallSrc": "/images/work/budvar-33/Dc4C_PJt3Q4-still-3-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Budvar 33 — costume in the finished film, frame 3",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/Dc4C_PJt3Q4.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/budvar-33/detail-1.webp",
        "smallSrc": "/images/work/budvar-33/detail-1-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Budvar 33 — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/Dc4Dh7QtqiD.mp4",
          "note": "Visually inspected costume frame at 0.81 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/budvar-33/costume-v2-1.webp",
        "smallSrc": "/images/work/budvar-33/costume-v2-1-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Budvar 33 — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/Dc4DPU9NAFl.mp4",
          "note": "Costume-focused frame at 1.22s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/budvar-33/costume-v2-6.webp",
        "smallSrc": "/images/work/budvar-33/costume-v2-6-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Budvar 33 — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/Dc4DPU9NAFl.mp4",
          "note": "Costume-focused frame at 6.916s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/budvar-33/costume-v3-2.webp",
        "smallSrc": "/images/work/budvar-33/costume-v3-2-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Budvar 33 — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/Dc4C_PJt3Q4.mp4",
          "note": "Costume-focused frame at 2.339s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/budvar-33/costume-v3-8.webp",
        "smallSrc": "/images/work/budvar-33/costume-v3-8-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Budvar 33 — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/Dc4C_PJt3Q4.mp4",
          "note": "Costume-focused frame at 8.848s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Budvar 33",
        "url": "https://www.instagram.com/p/Dc4Dh7QtqiD/",
        "src": "/videos/Dc4Dh7QtqiD.mp4",
        "width": 720,
        "height": 1280,
        "poster": {
          "src": "/images/work/budvar-33/Dc4Dh7QtqiD-still-3.webp",
          "smallSrc": "/images/work/budvar-33/Dc4Dh7QtqiD-still-3-480.webp",
          "smallWidth": 270,
          "width": 720,
          "height": 1280,
          "alt": "Budvar 33 — costume in the finished film, frame 3"
        }
      },
      {
        "provider": "native",
        "title": "Budvar 33",
        "url": "https://www.instagram.com/p/Dc4DPU9NAFl/",
        "src": "/videos/Dc4DPU9NAFl.mp4",
        "width": 720,
        "height": 1280,
        "poster": {
          "src": "/images/work/budvar-33/Dc4DPU9NAFl-still-3.webp",
          "smallSrc": "/images/work/budvar-33/Dc4DPU9NAFl-still-3-480.webp",
          "smallWidth": 270,
          "width": 720,
          "height": 1280,
          "alt": "Budvar 33 — costume in the finished film, frame 3"
        }
      },
      {
        "provider": "native",
        "title": "Budvar 33",
        "url": "https://www.instagram.com/p/Dc4C_PJt3Q4/",
        "src": "/videos/Dc4C_PJt3Q4.mp4",
        "width": 720,
        "height": 1280,
        "poster": {
          "src": "/images/work/budvar-33/Dc4C_PJt3Q4-still-2.webp",
          "smallSrc": "/images/work/budvar-33/Dc4C_PJt3Q4-still-2-480.webp",
          "smallWidth": 270,
          "width": 720,
          "height": 1280,
          "alt": "Budvar 33 — costume in the finished film, frame 2"
        }
      }
    ],
    "credit": "Costume design",
    "facts": [
      {
        "label": "Director",
        "value": "Luboš Rezler"
      },
      {
        "label": "Production",
        "value": "Bubenská Production"
      },
      {
        "label": "Cinematography",
        "value": "Kryštof Melka"
      },
      {
        "label": "Agency",
        "value": "Ogilvy"
      },
      {
        "label": "Costume design",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/Dc4Dh7QtqiD/"
      },
      {
        "label": "Agency campaign",
        "url": "https://ogilvy.cz/ogilvy-pripravilo-novou-kampan-pro-budvar-33"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/Dc4Dh7QtqiD/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "mother",
    "slug": "post-bellum-mother",
    "title": "Post Bellum — Mother",
    "thumbnail": {
      "src": "/images/work/mother/hd-costume-1.webp",
      "smallSrc": "/images/work/mother/hd-costume-1-480.webp",
      "smallWidth": 480,
      "width": 1540,
      "height": 1080,
      "alt": "Post Bellum — Mother — orange roll-neck and patterned knitwear, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/post-bellum-mother-hd.mp4",
        "note": "Visually reviewed frame at 9.51s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/mother/hd-costume-1.webp",
        "smallSrc": "/images/work/mother/hd-costume-1-480.webp",
        "smallWidth": 480,
        "width": 1540,
        "height": 1080,
        "alt": "Post Bellum — Mother — orange roll-neck and patterned knitwear, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/post-bellum-mother-hd.mp4",
          "note": "Visually reviewed frame at 9.51s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/mother/hd-costume-2.webp",
        "smallSrc": "/images/work/mother/hd-costume-2-480.webp",
        "smallWidth": 480,
        "width": 1540,
        "height": 1080,
        "alt": "Post Bellum — Mother — blue jacket, striped t-shirt and red collar, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/post-bellum-mother-hd.mp4",
          "note": "Visually reviewed frame at 22.81s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/mother/hd-costume-4.webp",
        "smallSrc": "/images/work/mother/hd-costume-4-480.webp",
        "smallWidth": 480,
        "width": 1540,
        "height": 1080,
        "alt": "Post Bellum — Mother — coat and period uniforms, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/post-bellum-mother-hd.mp4",
          "note": "Visually reviewed frame at 49.43s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/mother/hd-costume-5.webp",
        "smallSrc": "/images/work/mother/hd-costume-5-480.webp",
        "smallWidth": 480,
        "width": 1540,
        "height": 1080,
        "alt": "Post Bellum — Mother — patterned dress, apron and suit, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/post-bellum-mother-hd.mp4",
          "note": "Visually reviewed frame at 62.74s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/mother/hd-costume-6.webp",
        "smallSrc": "/images/work/mother/hd-costume-6-480.webp",
        "smallWidth": 480,
        "width": 1540,
        "height": 1080,
        "alt": "Post Bellum — Mother — red coat and patterned childhood knitwear, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/post-bellum-mother-hd.mp4",
          "note": "Visually reviewed frame at 76.05s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Post Bellum — Mother",
        "url": "https://www.marekpartys.com/post-bellum-mother/",
        "src": "/videos/post-bellum-mother-hd.mp4",
        "width": 1540,
        "height": 1080,
        "poster": {
          "src": "/images/work/mother/hd-film-poster.webp",
          "smallSrc": "/images/work/mother/hd-film-poster-480.webp",
          "smallWidth": 480,
          "width": 1540,
          "height": 1080,
          "alt": "Post Bellum — Mother — film preview",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/post-bellum-mother-hd.mp4",
            "note": "Poster from the exact full film, preserving its native frame."
          }
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Marek Partyš"
      },
      {
        "label": "Production",
        "value": "Bistro Films"
      },
      {
        "label": "Cinematography",
        "value": "David Hofmann"
      },
      {
        "label": "Wardrobe",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Agency",
        "value": "OAK"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UZaTqN7uX/"
      },
      {
        "label": "Production credits",
        "url": "https://www.linkedin.com/posts/leanne-tarvin-361a7864_so-excited-to-share-with-you-marek-party%C5%A1-activity-7163892870645534720-cbH8"
      },
      {
        "label": "Verified full film and production source",
        "url": "https://www.marekpartys.com/post-bellum-mother/"
      },
      {
        "label": "Director’s explicit wardrobe credit",
        "url": "https://vimeo.com/912061653"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/912061653",
      "note": "Exact primary campaign credits explicitly name Dušan Bebčák for the wardrobe/styling role recorded in this project’s facts."
    }
  },
  {
    "id": "national-museum",
    "slug": "national-museum",
    "title": "Národní muzeum — Nové expozice",
    "thumbnail": {
      "src": "/images/work/national-museum/hd-costume-1.webp",
      "smallSrc": "/images/work/national-museum/hd-costume-1-480.webp",
      "smallWidth": 480,
      "width": 1920,
      "height": 800,
      "alt": "Národní muzeum — Nové expozice — white period dresses in the field, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/narodni-muzeum-hd.mp4",
        "note": "Visually reviewed frame at 6.63s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/national-museum/hd-costume-1.webp",
        "smallSrc": "/images/work/national-museum/hd-costume-1-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 800,
        "alt": "Národní muzeum — Nové expozice — white period dresses in the field, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/narodni-muzeum-hd.mp4",
          "note": "Visually reviewed frame at 6.63s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/national-museum/hd-costume-2.webp",
        "smallSrc": "/images/work/national-museum/hd-costume-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 800,
        "alt": "Národní muzeum — Nové expozice — flat caps and dark work jackets, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/narodni-muzeum-hd.mp4",
          "note": "Visually reviewed frame at 15.91s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/national-museum/hd-costume-3.webp",
        "smallSrc": "/images/work/national-museum/hd-costume-3-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 800,
        "alt": "Národní muzeum — Nové expozice — coat and family wardrobe in the garden, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/narodni-muzeum-hd.mp4",
          "note": "Visually reviewed frame at 25.19s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/national-museum/hd-costume-4.webp",
        "smallSrc": "/images/work/national-museum/hd-costume-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 800,
        "alt": "Národní muzeum — Nové expozice — flat cap and jacket at the train, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/narodni-muzeum-hd.mp4",
          "note": "Visually reviewed frame at 34.47s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/national-museum/hd-costume-5.webp",
        "smallSrc": "/images/work/national-museum/hd-costume-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 800,
        "alt": "Národní muzeum — Nové expozice — wedding veil, hats and formal period dress, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/narodni-muzeum-hd.mp4",
          "note": "Visually reviewed frame at 43.74s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/national-museum/hd-costume-6.webp",
        "smallSrc": "/images/work/national-museum/hd-costume-6-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 800,
        "alt": "Národní muzeum — Nové expozice — contemporary coat inside the museum, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/narodni-muzeum-hd.mp4",
          "note": "Visually reviewed frame at 53.02s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Národní muzeum — Nové expozice",
        "url": "https://www.creativeembassy.net/wolfberg-narodni-muzeum",
        "src": "/videos/narodni-muzeum-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/national-museum/hd-film-poster.webp",
          "smallSrc": "/images/work/national-museum/hd-film-poster-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "Národní muzeum — Nové expozice — film preview",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/narodni-muzeum-hd.mp4",
            "note": "Poster from the exact full film, preserving its native frame."
          }
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Wolfberg"
      },
      {
        "label": "Production",
        "value": "Creative Embassy"
      },
      {
        "label": "Cinematography",
        "value": "David Hofmann"
      },
      {
        "label": "Producer",
        "value": "Petr Oplatka"
      },
      {
        "label": "Production design",
        "value": "Stella Šonková"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UWyawtXuq/"
      },
      {
        "label": "Verified full film and production source",
        "url": "https://www.creativeembassy.net/wolfberg-narodni-muzeum"
      },
      {
        "label": "Additional verified crew credits",
        "url": "https://vimeo.com/598206054"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8UWyawtXuq/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "lego-friends",
    "slug": "lego-friends",
    "title": "LEGO Friends — Heartlake City",
    "thumbnail": {
      "src": "/images/work/lego-friends/hd-detail-9.webp",
      "smallSrc": "/images/work/lego-friends/hd-detail-9-480.webp",
      "smallWidth": 480,
      "width": 1920,
      "height": 1080,
      "alt": "LEGO Friends — Heartlake City — pink checked top, blue jeans and graphic short overalls, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/lego-friends-hd.mp4",
        "note": "Reviewed frame at 9s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/lego-friends/hd-detail-9.webp",
        "smallSrc": "/images/work/lego-friends/hd-detail-9-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO Friends — Heartlake City — pink checked top, blue jeans and graphic short overalls, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-friends-hd.mp4",
          "note": "Reviewed frame at 9s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      },
      {
        "src": "/images/work/lego-friends/hd-detail-1.webp",
        "smallSrc": "/images/work/lego-friends/hd-detail-1-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO Friends — Heartlake City — pink checks and orange t-shirt at the letterbox, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-friends-hd.mp4",
          "note": "Reviewed frame at 1s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      },
      {
        "src": "/images/work/lego-friends/hd-detail-4.webp",
        "smallSrc": "/images/work/lego-friends/hd-detail-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO Friends — Heartlake City — pink checked sleeve and orange t-shirt, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-friends-hd.mp4",
          "note": "Reviewed frame at 4s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      },
      {
        "src": "/images/work/lego-friends/hd-detail-20.webp",
        "smallSrc": "/images/work/lego-friends/hd-detail-20-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO Friends — Heartlake City — graphic short overalls and pink wardrobe in heartlake city, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-friends-hd.mp4",
          "note": "Reviewed frame at 20s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      },
      {
        "src": "/images/work/lego-friends/hd-detail-23.webp",
        "smallSrc": "/images/work/lego-friends/hd-detail-23-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO Friends — Heartlake City — the two outfits alongside the lego characters, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-friends-hd.mp4",
          "note": "Reviewed frame at 23s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      },
      {
        "src": "/images/work/lego-friends/hd-detail-25.webp",
        "smallSrc": "/images/work/lego-friends/hd-detail-25-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "LEGO Friends — Heartlake City — pink checked top and orange t-shirt in the playroom, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/lego-friends-hd.mp4",
          "note": "Reviewed frame at 25s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "LEGO Friends — Heartlake City",
        "url": "https://www.bethanseller.com/archive/lego-friends-heartlake-city",
        "src": "/videos/lego-friends-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/lego-friends/hd-detail-9.webp",
          "smallSrc": "/images/work/lego-friends/hd-detail-9-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "LEGO Friends — Heartlake City — pink checked top, blue jeans and graphic short overalls, film still",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/lego-friends-hd.mp4",
            "note": "Reviewed frame at 9s from the exact public 1080p film. The cast, wardrobe and scenes match the previous portfolio version; source director and production credits agree. Not a separate fitting photograph."
          }
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Bethan Seller"
      },
      {
        "label": "Production",
        "value": "The Great Escape"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DJD5173MM7i/"
      },
      {
        "label": "Director’s portfolio",
        "url": "https://www.bethanseller.com/commercials"
      },
      {
        "label": "Exact full-resolution source film",
        "url": "https://www.bethanseller.com/archive/lego-friends-heartlake-city"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DJD5173MM7i/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "engelmuller-drive-to-win",
    "slug": "engelmuller-drive-to-win",
    "title": "Engelmüller — Drive to Win",
    "thumbnail": {
      "src": "/images/work/engelmuller-drive-to-win/costume-v1-6.webp",
      "smallSrc": "/images/work/engelmuller-drive-to-win/costume-v1-6-480.webp",
      "smallWidth": 480,
      "width": 1280,
      "height": 537,
      "alt": "Engelmüller — Drive to Win — costume in the finished film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/396010194.mp4",
        "note": "Costume-focused frame at 83.47s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/engelmuller-drive-to-win/396010194-still-2.webp",
        "smallSrc": "/images/work/engelmuller-drive-to-win/396010194-still-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 536,
        "alt": "Engelmüller — Drive to Win — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/396010194.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/engelmuller-drive-to-win/costume-v1-1.webp",
        "smallSrc": "/images/work/engelmuller-drive-to-win/costume-v1-1-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 536,
        "alt": "Engelmüller — Drive to Win — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/396010194.mp4",
          "note": "Costume-focused frame at 14.73s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/engelmuller-drive-to-win/costume-v1-3.webp",
        "smallSrc": "/images/work/engelmuller-drive-to-win/costume-v1-3-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 536,
        "alt": "Engelmüller — Drive to Win — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/396010194.mp4",
          "note": "Costume-focused frame at 44.19s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/engelmuller-drive-to-win/costume-v1-6.webp",
        "smallSrc": "/images/work/engelmuller-drive-to-win/costume-v1-6-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 537,
        "alt": "Engelmüller — Drive to Win — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/396010194.mp4",
          "note": "Costume-focused frame at 83.47s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/engelmuller-drive-to-win/final-detail-2.webp",
        "smallSrc": "/images/work/engelmuller-drive-to-win/final-detail-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Engelmüller — Drive to Win — period officer’s jacket and cap, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/396010194.mp4",
          "note": "Visually inspected wardrobe frame at 27.0s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/engelmuller-drive-to-win/final-detail-5.webp",
        "smallSrc": "/images/work/engelmuller-drive-to-win/final-detail-5-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Engelmüller — Drive to Win — racing headwear and driver’s outfit, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/396010194.mp4",
          "note": "Visually inspected wardrobe frame at 76.11s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/engelmuller-drive-to-win/final-detail-6.webp",
        "smallSrc": "/images/work/engelmuller-drive-to-win/final-detail-6-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Engelmüller — Drive to Win — period racing jacket in the doorway, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/396010194.mp4",
          "note": "Visually inspected wardrobe frame at 93.29s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Engelmüller — Drive to Win",
        "url": "https://vimeo.com/396010194",
        "width": 1280,
        "height": 720,
        "src": "/videos/396010194.mp4",
        "poster": {
          "src": "/images/work/engelmuller-drive-to-win/396010194-still-1.webp",
          "smallSrc": "/images/work/engelmuller-drive-to-win/396010194-still-1-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "Engelmüller — Drive to Win — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Costume design",
    "facts": [
      {
        "label": "Director",
        "value": "Prokop Motl"
      },
      {
        "label": "Production",
        "value": "Creative Embassy"
      },
      {
        "label": "Cinematography",
        "value": "David Hofmann"
      },
      {
        "label": "Agency",
        "value": "Scholz & Friends Praha"
      },
      {
        "label": "Costume design",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Photography",
        "value": "Pavel Hejný"
      }
    ],
    "sources": [
      {
        "label": "Campaign",
        "url": "https://www.mediar.cz/galerie-reklamy/rucne-site-rukavice-engelmuller-pribeh-ceskeho-vozu-na-le-mans/"
      },
      {
        "label": "Production credits",
        "url": "https://vimeo.com/396010194"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/396010194",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for costume design."
    }
  },
  {
    "id": "czech-technical-university",
    "slug": "czech-technical-university",
    "title": "ČVUT — Science across generations",
    "thumbnail": {
      "src": "/images/work/czech-technical-university/hd-costume-2.webp",
      "smallSrc": "/images/work/czech-technical-university/hd-costume-2-480.webp",
      "smallWidth": 480,
      "width": 1920,
      "height": 1080,
      "alt": "ČVUT — Science across generations — white laboratory coat and period shirt, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/cvut-hd.mp4",
        "note": "Visually reviewed frame at 14.03s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/czech-technical-university/hd-costume-2.webp",
        "smallSrc": "/images/work/czech-technical-university/hd-costume-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "ČVUT — Science across generations — white laboratory coat and period shirt, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/cvut-hd.mp4",
          "note": "Visually reviewed frame at 14.03s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/czech-technical-university/hd-costume-3.webp",
        "smallSrc": "/images/work/czech-technical-university/hd-costume-3-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "ČVUT — Science across generations — checked work shirt in the workshop, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/cvut-hd.mp4",
          "note": "Visually reviewed frame at 22.21s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/czech-technical-university/hd-costume-4.webp",
        "smallSrc": "/images/work/czech-technical-university/hd-costume-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "ČVUT — Science across generations — green sweater, grey shorts and football socks, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/cvut-hd.mp4",
          "note": "Visually reviewed frame at 30.39s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/czech-technical-university/hd-costume-6.webp",
        "smallSrc": "/images/work/czech-technical-university/hd-costume-6-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "ČVUT — Science across generations — period waistcoat, white shirt and tie, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/cvut-hd.mp4",
          "note": "Visually reviewed frame at 46.76s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/czech-technical-university/hd-costume-7.webp",
        "smallSrc": "/images/work/czech-technical-university/hd-costume-7-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "ČVUT — Science across generations — helmet and illuminated futuristic costume, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/cvut-hd.mp4",
          "note": "Visually reviewed frame at 54.36s from the exact full film above, matched to Dušan’s original publication. A film still, not a behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "ČVUT — Science across generations",
        "url": "https://www.creativeembassy.net/wolfberg-cvut",
        "src": "/videos/cvut-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/czech-technical-university/hd-film-poster.webp",
          "smallSrc": "/images/work/czech-technical-university/hd-film-poster-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "ČVUT — Science across generations — film preview",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/cvut-hd.mp4",
            "note": "Poster from the exact full film, preserving its native frame."
          }
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Wolfberg"
      },
      {
        "label": "Production",
        "value": "Creative Embassy"
      },
      {
        "label": "Cinematography",
        "value": "David Hofmann"
      },
      {
        "label": "Styling",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UXeVTNMyO/"
      },
      {
        "label": "Verified full film and production source",
        "url": "https://www.creativeembassy.net/wolfberg-cvut"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.creativeembassy.net/wolfberg-cvut",
      "note": "Exact primary campaign credits explicitly name Dušan Bebčák for the wardrobe/styling role recorded in this project’s facts."
    }
  },
  {
    "id": "bata-all-in-two",
    "slug": "bata-all-in-two",
    "title": "Baťa — All in two",
    "thumbnail": {
      "src": "/images/work/bata-all-in-two/detail-1.webp",
      "smallSrc": "/images/work/bata-all-in-two/detail-1-480.webp",
      "smallWidth": 480,
      "width": 1280,
      "height": 720,
      "alt": "Baťa — All in two — frame from the advert",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/277521929.mp4",
        "note": "Visually inspected costume frame at 3.843 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/bata-all-in-two/277521929-still-2.webp",
        "smallSrc": "/images/work/bata-all-in-two/277521929-still-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Baťa — All in two — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/277521929.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/bata-all-in-two/detail-1.webp",
        "smallSrc": "/images/work/bata-all-in-two/detail-1-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Baťa — All in two — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/277521929.mp4",
          "note": "Visually inspected costume frame at 3.843 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/bata-all-in-two/detail-3.webp",
        "smallSrc": "/images/work/bata-all-in-two/detail-3-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Baťa — All in two — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/277521929.mp4",
          "note": "Visually inspected costume frame at 27.863 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/bata-all-in-two/detail-4.webp",
        "smallSrc": "/images/work/bata-all-in-two/detail-4-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Baťa — All in two — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/277521929.mp4",
          "note": "Visually inspected costume frame at 39.393 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/bata-all-in-two/final-detail-2.webp",
        "smallSrc": "/images/work/bata-all-in-two/final-detail-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Baťa — All in two — dark jacket and layered neckline, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/277521929.mp4",
          "note": "Visually inspected wardrobe frame at 10.57s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/bata-all-in-two/final-detail-4.webp",
        "smallSrc": "/images/work/bata-all-in-two/final-detail-4-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Baťa — All in two — dark collared coat beside the fence, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/277521929.mp4",
          "note": "Visually inspected wardrobe frame at 23.06s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/bata-all-in-two/final-detail-7.webp",
        "smallSrc": "/images/work/bata-all-in-two/final-detail-7-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Baťa — All in two — dark sleeveless top and necklace, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/277521929.mp4",
          "note": "Visually inspected wardrobe frame at 42.28s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Baťa — All in two",
        "url": "https://vimeo.com/277521929",
        "width": 1280,
        "height": 720,
        "src": "/videos/277521929.mp4",
        "poster": {
          "src": "/images/work/bata-all-in-two/277521929-still-1.webp",
          "smallSrc": "/images/work/bata-all-in-two/277521929-still-1-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "Baťa — All in two — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Costume design",
    "facts": [
      {
        "label": "Director",
        "value": "Luboš Vacke"
      },
      {
        "label": "Production",
        "value": "Creative Embassy"
      },
      {
        "label": "Cinematography",
        "value": "David Hofmann"
      },
      {
        "label": "Agency",
        "value": "McCann"
      },
      {
        "label": "Costume design",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Costume assistant",
        "value": "Tereza Nádvorníková"
      }
    ],
    "sources": [
      {
        "label": "Production credits",
        "url": "https://vimeo.com/277521929"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UYnTFtsI3/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/277521929",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for costume design."
    }
  },
  {
    "id": "billa-masterchef",
    "slug": "billa-masterchef",
    "title": "BILLA — MasterChef",
    "thumbnail": {
      "src": "/images/work/billa-masterchef/detail-1.webp",
      "smallSrc": "/images/work/billa-masterchef/detail-1-480.webp",
      "smallWidth": 480,
      "width": 1280,
      "height": 720,
      "alt": "BILLA — MasterChef — frame from the advert",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/797238968.mp4",
        "note": "Visually inspected costume frame at 1.2 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/billa-masterchef/797238968-still-3.webp",
        "smallSrc": "/images/work/billa-masterchef/797238968-still-3-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "BILLA — MasterChef — costume in the finished film, frame 3",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/797238968.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/billa-masterchef/detail-1.webp",
        "smallSrc": "/images/work/billa-masterchef/detail-1-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "BILLA — MasterChef — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/797238968.mp4",
          "note": "Visually inspected costume frame at 1.2 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/billa-masterchef/detail-3.webp",
        "smallSrc": "/images/work/billa-masterchef/detail-3-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "BILLA — MasterChef — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/797238968.mp4",
          "note": "Visually inspected costume frame at 8.7 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/billa-masterchef/final-detail-4.webp",
        "smallSrc": "/images/work/billa-masterchef/final-detail-4-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "BILLA — MasterChef — yellow knitwear, blue apron and green shirt by the kitchen window, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/797238968.mp4",
          "note": "Visually inspected wardrobe frame at 7.2s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "BILLA — MasterChef",
        "url": "https://vimeo.com/797238968",
        "width": 1280,
        "height": 720,
        "src": "/videos/797238968.mp4",
        "poster": {
          "src": "/images/work/billa-masterchef/797238968-still-2.webp",
          "smallSrc": "/images/work/billa-masterchef/797238968-still-2-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "BILLA — MasterChef — costume in the finished film, frame 2"
        }
      }
    ],
    "credit": "Wardrobe / costumes",
    "facts": [
      {
        "label": "Director",
        "value": "Jakub Švejkar"
      },
      {
        "label": "Production",
        "value": "Procoma"
      },
      {
        "label": "Cinematography",
        "value": "Radim Střelka"
      },
      {
        "label": "Agency",
        "value": "McCann Prague"
      },
      {
        "label": "Wardrobe / costumes",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Wardrobe assistant",
        "value": "Monika Černoušková"
      }
    ],
    "sources": [
      {
        "label": "Production credits",
        "url": "https://vimeo.com/797238968"
      },
      {
        "label": "Campaign",
        "url": "https://www.mediaguru.cz/billa-ma-novou-vernostni-kampan-s-nadobim-masterchef"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/797238968",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for wardrobe / costumes."
    }
  },
  {
    "id": "favorit",
    "slug": "favorit",
    "title": "Favorit",
    "thumbnail": {
      "src": "/images/work/favorit/268355869-still-1.webp",
      "smallSrc": "/images/work/favorit/268355869-still-1-480.webp",
      "smallWidth": 480,
      "width": 1280,
      "height": 720,
      "alt": "Favorit — costume in the finished film, frame 1"
    },
    "images": [
      {
        "src": "/images/work/favorit/268355869-still-2.webp",
        "smallSrc": "/images/work/favorit/268355869-still-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 532,
        "alt": "Favorit — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/268355869.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/favorit/detail-1.webp",
        "smallSrc": "/images/work/favorit/detail-1-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 533,
        "alt": "Favorit — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/268355869.mp4",
          "note": "Visually inspected costume frame at 7.962 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/favorit/detail-2.webp",
        "smallSrc": "/images/work/favorit/detail-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 534,
        "alt": "Favorit — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/268355869.mp4",
          "note": "Visually inspected costume frame at 31.846 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/favorit/detail-4.webp",
        "smallSrc": "/images/work/favorit/detail-4-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 532,
        "alt": "Favorit — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/268355869.mp4",
          "note": "Visually inspected costume frame at 81.606 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Favorit",
        "url": "https://vimeo.com/268355869",
        "width": 1280,
        "height": 720,
        "src": "/videos/268355869.mp4",
        "poster": {
          "src": "/images/work/favorit/268355869-still-1.webp",
          "smallSrc": "/images/work/favorit/268355869-still-1-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "Favorit — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Wardrobe",
    "facts": [
      {
        "label": "Director",
        "value": "Wolfberg"
      },
      {
        "label": "Production",
        "value": "Creative Embassy"
      },
      {
        "label": "Cinematography",
        "value": "Martin Matiášek"
      },
      {
        "label": "Wardrobe",
        "value": "Dušan Bebčák / Tereza Nádvorníková"
      },
      {
        "label": "Agency",
        "value": "Y&R"
      }
    ],
    "sources": [
      {
        "label": "Production credits",
        "url": "https://vimeo.com/268355869"
      },
      {
        "label": "Director’s portfolio",
        "url": "https://www.wearefred.co/wolfberg"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/268355869",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for wardrobe."
    }
  },
  {
    "id": "rossmann",
    "slug": "rossmann",
    "title": "ROSSMANN",
    "thumbnail": {
      "src": "/images/work/rossmann/detail-2.webp",
      "smallSrc": "/images/work/rossmann/detail-2-480.webp",
      "smallWidth": 480,
      "width": 1032,
      "height": 720,
      "alt": "ROSSMANN — frame from the advert",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/DQd6DDdjAqh.mp4",
        "note": "Visually inspected costume frame at 19.84 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/rossmann/DQd6DDdjAqh-still-2.webp",
        "smallSrc": "/images/work/rossmann/DQd6DDdjAqh-still-2-480.webp",
        "smallWidth": 480,
        "width": 1032,
        "height": 720,
        "alt": "ROSSMANN — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DQd6DDdjAqh.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/rossmann/detail-2.webp",
        "smallSrc": "/images/work/rossmann/detail-2-480.webp",
        "smallWidth": 480,
        "width": 1032,
        "height": 720,
        "alt": "ROSSMANN — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DQd6DDdjAqh.mp4",
          "note": "Visually inspected costume frame at 19.84 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/rossmann/detail-4.webp",
        "smallSrc": "/images/work/rossmann/detail-4-480.webp",
        "smallWidth": 480,
        "width": 1032,
        "height": 720,
        "alt": "ROSSMANN — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DQd6DDdjAqh.mp4",
          "note": "Visually inspected costume frame at 50.84 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/rossmann/published-47.webp",
        "smallSrc": "/images/work/rossmann/published-47-480.webp",
        "smallWidth": 480,
        "width": 1440,
        "height": 810,
        "alt": "ROSSMANN — published campaign image 4",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/DQd6DDdjAqh.mp4",
          "note": "Same mother/daughter campaign, apartment set and performers in the director’s detailed campaign carousel. Directors, DOP, client, agency and production match the portfolio film; caption explicitly credits @bebcak and @ze_ni_ta jointly."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "ROSSMANN",
        "url": "https://www.instagram.com/p/DQd6DDdjAqh/",
        "src": "/videos/DQd6DDdjAqh.mp4",
        "width": 1032,
        "height": 720,
        "poster": {
          "src": "/images/work/rossmann/DQd6DDdjAqh-still-1.webp",
          "smallSrc": "/images/work/rossmann/DQd6DDdjAqh-still-1-480.webp",
          "smallWidth": 480,
          "width": 1032,
          "height": 720,
          "alt": "ROSSMANN — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Styling",
    "facts": [
      {
        "label": "Director",
        "value": "Novák & Nguyen"
      },
      {
        "label": "Production",
        "value": "Armada Films"
      },
      {
        "label": "Cinematography",
        "value": "Filip Hájek"
      },
      {
        "label": "Agency",
        "value": "DDB Prague"
      },
      {
        "label": "Wardrobe",
        "value": "Dušan Bebčák / @ze_ni_ta"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DQd6DDdjAqh/"
      },
      {
        "label": "Campaign",
        "url": "https://www.rossmann.cz/obsah/o-nas/tiskove-zpravy/2025/rossmann-predstavuje-novy-emotivni-spot-pece-ma-mnoho-podob-lasku-ale-najdete-v-kazde-z-nich-a-pokracuje-tak-v-tradici-empatie-a-lidskosti"
      },
      {
        "label": "Producer’s explicit styling credit",
        "url": "https://cz.linkedin.com/company/armada-films"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://cz.linkedin.com/company/armada-films",
      "note": "Armada’s exact mother/daughter production publication explicitly credits Stylist Dusan Bebcak and agrees with Dušan’s Novák & Nguyen / Filip Hájek caption. The shared wardrobe entry is separately corroborated by the matched professional fitting publication. Not the earlier Mugshots ROSSMANN film, which has different stylists."
    }
  },
  {
    "id": "vitana-gorilovacka",
    "slug": "vitana-gorilovacka",
    "title": "Vitana — Gorilovačka",
    "thumbnail": {
      "src": "/images/work/vitana-gorilovacka/detail-1.webp",
      "smallSrc": "/images/work/vitana-gorilovacka/detail-1-480.webp",
      "smallWidth": 480,
      "width": 1280,
      "height": 720,
      "alt": "Vitana — Gorilovačka — frame from the advert",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/540684470.mp4",
        "note": "Visually inspected costume frame at 2.4 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/vitana-gorilovacka/540684470-still-2.webp",
        "smallSrc": "/images/work/vitana-gorilovacka/540684470-still-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Vitana — Gorilovačka — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/540684470.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/vitana-gorilovacka/detail-1.webp",
        "smallSrc": "/images/work/vitana-gorilovacka/detail-1-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Vitana — Gorilovačka — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/540684470.mp4",
          "note": "Visually inspected costume frame at 2.4 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/vitana-gorilovacka/detail-3.webp",
        "smallSrc": "/images/work/vitana-gorilovacka/detail-3-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Vitana — Gorilovačka — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/540684470.mp4",
          "note": "Visually inspected costume frame at 17.4 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/vitana-gorilovacka/final-detail-2.webp",
        "smallSrc": "/images/work/vitana-gorilovacka/final-detail-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Vitana — Gorilovačka — striped red-and-white neckline, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/540684470.mp4",
          "note": "Visually inspected wardrobe frame at 6.6s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/vitana-gorilovacka/final-detail-5.webp",
        "smallSrc": "/images/work/vitana-gorilovacka/final-detail-5-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Vitana — Gorilovačka — teal blouse at the garden table, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/540684470.mp4",
          "note": "Visually inspected wardrobe frame at 18.6s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/vitana-gorilovacka/final-detail-6.webp",
        "smallSrc": "/images/work/vitana-gorilovacka/final-detail-6-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Vitana — Gorilovačka — denim waistcoat, jeans and the garden-party ensemble, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/540684470.mp4",
          "note": "Visually inspected wardrobe frame at 22.8s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Vitana — Gorilovačka",
        "url": "https://vimeo.com/540684470",
        "width": 1280,
        "height": 720,
        "src": "/videos/540684470.mp4",
        "poster": {
          "src": "/images/work/vitana-gorilovacka/540684470-still-1.webp",
          "smallSrc": "/images/work/vitana-gorilovacka/540684470-still-1-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "Vitana — Gorilovačka — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Costume design",
    "facts": [
      {
        "label": "Director",
        "value": "Pavel Soukup"
      },
      {
        "label": "Production",
        "value": "Creative Embassy"
      },
      {
        "label": "Cinematography",
        "value": "Radim Střelka"
      },
      {
        "label": "Agency",
        "value": "WMC Grey"
      },
      {
        "label": "Costume design",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Costume assistant",
        "value": "Klára Macková"
      }
    ],
    "sources": [
      {
        "label": "Production credits",
        "url": "https://vimeo.com/540684470"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/540684470",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for costume design."
    }
  },
  {
    "id": "skoda-130-let",
    "slug": "skoda-130-let",
    "title": "Škoda — 130 let",
    "thumbnail": {
      "src": "/images/work/skoda-130-let/1143365815-still-1.webp",
      "smallSrc": "/images/work/skoda-130-let/1143365815-still-1-480.webp",
      "smallWidth": 480,
      "width": 1366,
      "height": 684,
      "alt": "Škoda — 130 let — costume in the finished film, frame 1"
    },
    "images": [
      {
        "src": "/images/work/skoda-130-let/1143365815-still-3.webp",
        "smallSrc": "/images/work/skoda-130-let/1143365815-still-3-480.webp",
        "smallWidth": 480,
        "width": 1366,
        "height": 684,
        "alt": "Škoda — 130 let — costume in the finished film, frame 3",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/1143365815.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/skoda-130-let/detail-1.webp",
        "smallSrc": "/images/work/skoda-130-let/detail-1-480.webp",
        "smallWidth": 480,
        "width": 1366,
        "height": 684,
        "alt": "Škoda — 130 let — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/1143365815.mp4",
          "note": "Visually inspected costume frame at 4.864 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/skoda-130-let/detail-4.webp",
        "smallSrc": "/images/work/skoda-130-let/detail-4-480.webp",
        "smallWidth": 480,
        "width": 1366,
        "height": 684,
        "alt": "Škoda — 130 let — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/1143365815.mp4",
          "note": "Visually inspected costume frame at 49.856 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Škoda — 130 let",
        "url": "https://vimeo.com/1143365815",
        "width": 1366,
        "height": 684,
        "src": "/videos/1143365815.mp4",
        "poster": {
          "src": "/images/work/skoda-130-let/1143365815-still-1.webp",
          "smallSrc": "/images/work/skoda-130-let/1143365815-still-1-480.webp",
          "smallWidth": 480,
          "width": 1366,
          "height": 684,
          "alt": "Škoda — 130 let — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Styling",
    "facts": [
      {
        "label": "Director",
        "value": "Mugshots"
      },
      {
        "label": "Production",
        "value": "Boogie Films"
      },
      {
        "label": "Cinematography",
        "value": "Radim Střelka"
      },
      {
        "label": "Production design",
        "value": "Richard Dvořák"
      },
      {
        "label": "Styling",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Production credits",
        "url": "https://www.mugshots.cz/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.mugshots.cz/",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for styling."
    }
  },
  {
    "id": "tmobile-magenta-tv",
    "slug": "tmobile-magenta-tv",
    "title": "T-Mobile — Magenta TV: Crime Story",
    "thumbnail": {
      "src": "/images/work/tmobile-magenta-tv/verified-hd-1.webp",
      "smallSrc": "/images/work/tmobile-magenta-tv/verified-hd-1-480.webp",
      "smallWidth": 480,
      "width": 1920,
      "height": 1080,
      "alt": "T-Mobile — Magenta TV: Crime Story — pale shirt and brown buttoned waistcoat, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/tmobile-crime-story-hd.mp4",
        "note": "Visually reviewed at 1s from Ogilvy’s complete 1080p film. Same cast, bookcase interview, night-vision sequence and family costumes as Dušan’s portrait repost. Not a fitting or BTS photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/tmobile-magenta-tv/verified-hd-1.webp",
        "smallSrc": "/images/work/tmobile-magenta-tv/verified-hd-1-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "T-Mobile — Magenta TV: Crime Story — pale shirt and brown buttoned waistcoat, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/tmobile-crime-story-hd.mp4",
          "note": "Visually reviewed at 1s from Ogilvy’s complete 1080p film. Same cast, bookcase interview, night-vision sequence and family costumes as Dušan’s portrait repost. Not a fitting or BTS photograph."
        }
      },
      {
        "src": "/images/work/tmobile-magenta-tv/verified-hd-2.webp",
        "smallSrc": "/images/work/tmobile-magenta-tv/verified-hd-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "T-Mobile — Magenta TV: Crime Story — grey T-shirt and dark zip-up layer, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/tmobile-crime-story-hd.mp4",
          "note": "Visually reviewed at 16.2s from Ogilvy’s complete 1080p film. Same cast, bookcase interview, night-vision sequence and family costumes as Dušan’s portrait repost. Not a fitting or BTS photograph."
        }
      },
      {
        "src": "/images/work/tmobile-magenta-tv/verified-hd-3.webp",
        "smallSrc": "/images/work/tmobile-magenta-tv/verified-hd-3-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "T-Mobile — Magenta TV: Crime Story — contrasting dark layers and casual family wardrobe, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/tmobile-crime-story-hd.mp4",
          "note": "Visually reviewed at 18.3s from Ogilvy’s complete 1080p film. Same cast, bookcase interview, night-vision sequence and family costumes as Dušan’s portrait repost. Not a fitting or BTS photograph."
        }
      },
      {
        "src": "/images/work/tmobile-magenta-tv/verified-hd-4.webp",
        "smallSrc": "/images/work/tmobile-magenta-tv/verified-hd-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "T-Mobile — Magenta TV: Crime Story — colourful striped T-shirt and dark trousers, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/tmobile-crime-story-hd.mp4",
          "note": "Visually reviewed at 20.7s from Ogilvy’s complete 1080p film. Same cast, bookcase interview, night-vision sequence and family costumes as Dušan’s portrait repost. Not a fitting or BTS photograph."
        }
      },
      {
        "src": "/images/work/tmobile-magenta-tv/verified-hd-5.webp",
        "smallSrc": "/images/work/tmobile-magenta-tv/verified-hd-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "T-Mobile — Magenta TV: Crime Story — hooded outfit in the night-vision scene, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/tmobile-crime-story-hd.mp4",
          "note": "Visually reviewed at 14.5s from Ogilvy’s complete 1080p film. Same cast, bookcase interview, night-vision sequence and family costumes as Dušan’s portrait repost. Not a fitting or BTS photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "T-Mobile — Magenta TV: Crime Story",
        "url": "https://ogilvy.cz/magenta-tv-0",
        "src": "/videos/tmobile-crime-story-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/tmobile-magenta-tv/verified-hd-1.webp",
          "smallSrc": "/images/work/tmobile-magenta-tv/verified-hd-1-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "T-Mobile — Magenta TV: Crime Story — pale shirt and brown buttoned waistcoat, film still",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/tmobile-crime-story-hd.mp4",
            "note": "Visually reviewed at 1s from Ogilvy’s complete 1080p film. Same cast, bookcase interview, night-vision sequence and family costumes as Dušan’s portrait repost. Not a fitting or BTS photograph."
          }
        }
      }
    ],
    "credit": "Wardrobe styling",
    "facts": [
      {
        "label": "Director",
        "value": "Jan Ruttner"
      },
      {
        "label": "Production",
        "value": "Stink Czech Republic"
      },
      {
        "label": "Cinematography",
        "value": "Tomáš Šťastný"
      },
      {
        "label": "Agency",
        "value": "Ogilvy"
      },
      {
        "label": "Wardrobe styling",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/Dc4Ek6WSHlF/"
      },
      {
        "label": "Agency campaign",
        "url": "https://ogilvy.cz/magenta-tv-0"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/Dc4Ek6WSHlF/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "tmobile-restaurant",
    "slug": "tmobile-magenta-tv-netflix",
    "title": "T-Mobile — Magenta TV + Netflix",
    "images": [
      {
        "src": "/images/work/tmobile-restaurant/verified-hd-1.webp",
        "smallSrc": "/images/work/tmobile-restaurant/verified-hd-1-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "T-Mobile — Magenta TV + Netflix — mustard outfit with black belt, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/tmobile-magenta-tv-netflix-hd.mp4",
          "note": "Visually inspected wardrobe frame at 2.5s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/tmobile-restaurant/verified-hd-2.webp",
        "smallSrc": "/images/work/tmobile-restaurant/verified-hd-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "T-Mobile — Magenta TV + Netflix — full-length mustard outfit in motion, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/tmobile-magenta-tv-netflix-hd.mp4",
          "note": "Visually inspected wardrobe frame at 7.2s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/tmobile-restaurant/verified-hd-3.webp",
        "smallSrc": "/images/work/tmobile-restaurant/verified-hd-3-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "T-Mobile — Magenta TV + Netflix — mint blouse and rust-coloured knitwear, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/tmobile-magenta-tv-netflix-hd.mp4",
          "note": "Visually inspected wardrobe frame at 13s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/tmobile-restaurant/verified-hd-4.webp",
        "smallSrc": "/images/work/tmobile-restaurant/verified-hd-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "T-Mobile — Magenta TV + Netflix — layered blouse, knitwear and beige trousers, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/tmobile-magenta-tv-netflix-hd.mp4",
          "note": "Visually inspected wardrobe frame at 15.6s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/tmobile-restaurant/verified-hd-5.webp",
        "smallSrc": "/images/work/tmobile-restaurant/verified-hd-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "T-Mobile — Magenta TV + Netflix — the family’s contrasting contemporary wardrobes, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/tmobile-magenta-tv-netflix-hd.mp4",
          "note": "Visually inspected wardrobe frame at 19.84s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "T-Mobile — Magenta TV + Netflix",
        "url": "https://ogilvy.cz/magenta-tv-netflix-0",
        "src": "/videos/tmobile-magenta-tv-netflix-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/tmobile-restaurant/verified-hd-poster.webp",
          "smallSrc": "/images/work/tmobile-restaurant/verified-hd-poster-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "T-Mobile — Magenta TV + Netflix — film preview",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/tmobile-magenta-tv-netflix-hd.mp4",
            "note": "Preview from the exact HD film, preserving its native frame."
          }
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Agency",
        "value": "Ogilvy"
      },
      {
        "label": "Client",
        "value": "Deutsche Telekom"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DQKuox1jGWt/"
      },
      {
        "label": "Exact full-resolution production film",
        "url": "https://ogilvy.cz/magenta-tv-netflix-0"
      }
    ],
    "portrait": false,
    "thumbnail": {
      "src": "/images/work/tmobile-restaurant/verified-hd-1.webp",
      "smallSrc": "/images/work/tmobile-restaurant/verified-hd-1-480.webp",
      "smallWidth": 480,
      "width": 1920,
      "height": 1080,
      "alt": "T-Mobile — Magenta TV + Netflix — mustard outfit with black belt, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/tmobile-magenta-tv-netflix-hd.mp4",
        "note": "Visually inspected wardrobe frame at 2.5s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
      }
    },
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DQKuox1jGWt/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "vodafone-youth",
    "slug": "vodafone-youth",
    "title": "Vodafone — Unlimited Honesty",
    "thumbnail": {
      "src": "/images/work/vodafone-youth/adc-original-1.webp",
      "smallSrc": "/images/work/vodafone-youth/adc-original-1-480.webp",
      "smallWidth": 270,
      "width": 1080,
      "height": 1920,
      "alt": "Vodafone — Unlimited Honesty — red hat and jacket, purple jacket and yellow checked shirt",
      "evidence": {
        "basis": "visual-match",
        "videoSrc": "/videos/C8T3ZOJtsUl.mp4",
        "note": "Official ADC campaign submission: the same cast, location and distinctive outfits as this campaign’s corresponding portfolio short. First image matches the greenhouse group; second matches the outdoor courtside group. Directors Novák & Nguyen and Procoma agree with the original end cards."
      }
    },
    "images": [
      {
        "src": "/images/work/vodafone-youth/C8T3ZOJtsUl-still-1.webp",
        "smallSrc": "/images/work/vodafone-youth/C8T3ZOJtsUl-still-1-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Vodafone — Youth — costume in the finished film, frame 1",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8T3ZOJtsUl.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/vodafone-youth/detail-1.webp",
        "smallSrc": "/images/work/vodafone-youth/detail-1-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Vodafone — Youth — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8T3ZOJtsUl.mp4",
          "note": "Visually inspected costume frame at 1.206 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/vodafone-youth/adc-original-1.webp",
        "smallSrc": "/images/work/vodafone-youth/adc-original-1-480.webp",
        "smallWidth": 270,
        "width": 1080,
        "height": 1920,
        "alt": "Vodafone — Unlimited Honesty — red hat and jacket, purple jacket and yellow checked shirt",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/C8T3ZOJtsUl.mp4",
          "note": "Official ADC campaign submission: the same cast, location and distinctive outfits as this campaign’s corresponding portfolio short. First image matches the greenhouse group; second matches the outdoor courtside group. Directors Novák & Nguyen and Procoma agree with the original end cards."
        }
      },
      {
        "src": "/images/work/vodafone-youth/adc-original-2.webp",
        "smallSrc": "/images/work/vodafone-youth/adc-original-2-480.webp",
        "smallWidth": 270,
        "width": 1080,
        "height": 1920,
        "alt": "Vodafone — Unlimited Honesty — striped top, white sleeveless layer and red outfit",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/C8T3TdvtbM7.mp4",
          "note": "Official ADC campaign submission: the same cast, location and distinctive outfits as this campaign’s corresponding portfolio short. First image matches the greenhouse group; second matches the outdoor courtside group. Directors Novák & Nguyen and Procoma agree with the original end cards."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Vodafone — Unlimited Honesty",
        "url": "https://www.instagram.com/p/C8T3ZOJtsUl/",
        "src": "/videos/C8T3ZOJtsUl.mp4",
        "width": 720,
        "height": 1280,
        "poster": {
          "src": "/images/work/mobile-data-films/cover.webp",
          "smallSrc": "/images/work/mobile-data-films/cover-480.webp",
          "smallWidth": 270,
          "width": 563,
          "height": 1000,
          "alt": "Mobile data — Films"
        }
      },
      {
        "provider": "native",
        "title": "Vodafone — Unlimited Honesty",
        "url": "https://www.instagram.com/p/C8T3TdvtbM7/",
        "src": "/videos/C8T3TdvtbM7.mp4",
        "width": 720,
        "height": 1280,
        "poster": {
          "src": "/images/work/vodafone-youth/C8T3TdvtbM7-still-1.webp",
          "smallSrc": "/images/work/vodafone-youth/C8T3TdvtbM7-still-1-480.webp",
          "smallWidth": 270,
          "width": 720,
          "height": 1280,
          "alt": "Vodafone — Youth — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Novák & Nguyen"
      },
      {
        "label": "Production",
        "value": "Procoma"
      },
      {
        "label": "Agency",
        "value": "McCann Prague"
      },
      {
        "label": "Client",
        "value": "Vodafone Czech Republic"
      },
      {
        "label": "Executive producer",
        "value": "Alžběta Šerclová"
      },
      {
        "label": "Producer",
        "value": "Albert Franc"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8T3ZOJtsUl/"
      },
      {
        "label": "Campaign",
        "url": "https://www.adcawards.cz/en/public/gallery-item/2024?eid=27d7ce09-223e-4437-b40e-0876cf7b37e8&f=Vsechny-prihlasky&p=1"
      }
    ],
    "portrait": true,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8T3ZOJtsUl/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "loreal-men-expert",
    "slug": "loreal-men-expert",
    "title": "L’Oréal Men Expert — Hydra Energetic",
    "thumbnail": {
      "src": "/images/work/loreal-men-expert/published-29.webp",
      "smallSrc": "/images/work/loreal-men-expert/published-29-480.webp",
      "smallWidth": 360,
      "width": 1204,
      "height": 1605,
      "alt": "loreal men expert — published campaign photograph",
      "evidence": {
        "basis": "same-publication",
        "videoSrc": "/videos/loreal-men-expert.mp4",
        "note": "The director publishes this Hydra Energetic campaign series together and explicitly credits @bebcak. The portrait photographs include Boris Valábik and Gergely Siklósi; the attached complete film features Lukáš Sedlák. These are campaign photographs, not claimed as frames or fitting photographs from that individual cut."
      }
    },
    "images": [
      {
        "src": "/images/work/loreal-men-expert/published-29.webp",
        "smallSrc": "/images/work/loreal-men-expert/published-29-480.webp",
        "smallWidth": 360,
        "width": 1204,
        "height": 1605,
        "alt": "L’Oréal Men Expert — Hydra Energetic — published campaign image 1",
        "evidence": {
          "basis": "same-publication",
          "videoSrc": "/videos/loreal-men-expert.mp4",
          "note": "The director publishes this Hydra Energetic campaign series together and explicitly credits @bebcak. The portrait photographs include Boris Valábik and Gergely Siklósi. The attached complete 20-second variant is from the same publication. Photographs of series performers are not claimed to be frames or fitting photographs from that individual cut."
        }
      },
      {
        "src": "/images/work/loreal-men-expert/published-26.webp",
        "smallSrc": "/images/work/loreal-men-expert/published-26-480.webp",
        "smallWidth": 360,
        "width": 1200,
        "height": 1600,
        "alt": "L’Oréal Men Expert — Hydra Energetic — published campaign image 2",
        "evidence": {
          "basis": "same-publication",
          "videoSrc": "/videos/loreal-men-expert.mp4",
          "note": "The director publishes this Hydra Energetic campaign series together and explicitly credits @bebcak. The portrait photographs include Boris Valábik and Gergely Siklósi. The attached complete 20-second variant is from the same publication. Photographs of series performers are not claimed to be frames or fitting photographs from that individual cut."
        }
      },
      {
        "src": "/images/work/loreal-men-expert/published-28.webp",
        "smallSrc": "/images/work/loreal-men-expert/published-28-480.webp",
        "smallWidth": 360,
        "width": 1206,
        "height": 1608,
        "alt": "L’Oréal Men Expert — Hydra Energetic — published campaign image 3",
        "evidence": {
          "basis": "same-publication",
          "videoSrc": "/videos/loreal-men-expert.mp4",
          "note": "The director publishes this Hydra Energetic campaign series together and explicitly credits @bebcak. The portrait photographs include Boris Valábik and Gergely Siklósi. The attached complete 20-second variant is from the same publication. Photographs of series performers are not claimed to be frames or fitting photographs from that individual cut."
        }
      },
      {
        "src": "/images/work/loreal-men-expert/published-30.webp",
        "smallSrc": "/images/work/loreal-men-expert/published-30-480.webp",
        "smallWidth": 360,
        "width": 1440,
        "height": 1920,
        "alt": "L’Oréal Men Expert — Hydra Energetic — published campaign image 4",
        "evidence": {
          "basis": "same-publication",
          "videoSrc": "/videos/loreal-men-expert.mp4",
          "note": "The director publishes this Hydra Energetic campaign series together and explicitly credits @bebcak. The portrait photographs include Boris Valábik and Gergely Siklósi. The attached complete 20-second variant is from the same publication. Photographs of series performers are not claimed to be frames or fitting photographs from that individual cut."
        }
      },
      {
        "src": "/images/work/loreal-men-expert/published-31.webp",
        "smallSrc": "/images/work/loreal-men-expert/published-31-480.webp",
        "smallWidth": 360,
        "width": 1440,
        "height": 1920,
        "alt": "L’Oréal Men Expert — Hydra Energetic — published campaign image 5",
        "evidence": {
          "basis": "same-publication",
          "videoSrc": "/videos/loreal-men-expert.mp4",
          "note": "The director publishes this Hydra Energetic campaign series together and explicitly credits @bebcak. The portrait photographs include Boris Valábik and Gergely Siklósi. The attached complete 20-second variant is from the same publication. Photographs of series performers are not claimed to be frames or fitting photographs from that individual cut."
        }
      },
      {
        "src": "/images/work/loreal-men-expert/published-extra-27.webp",
        "smallSrc": "/images/work/loreal-men-expert/published-extra-27-480.webp",
        "smallWidth": 360,
        "width": 1202,
        "height": 1602,
        "alt": "L’Oréal Men Expert — Hydra Energetic — white t-shirt and orange campaign portrait",
        "evidence": {
          "basis": "same-publication",
          "videoSrc": "/videos/loreal-men-expert.mp4",
          "note": "The director publishes this Hydra Energetic campaign series together and explicitly credits @bebcak. The portrait photographs include Boris Valábik and Gergely Siklósi. The attached complete 20-second variant is from the same publication. Photographs of series performers are not claimed to be frames or fitting photographs from that individual cut."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "L’Oréal Men Expert — Hydra Energetic",
        "url": "https://www.instagram.com/p/DUoPG4EEp4z/",
        "src": "/videos/loreal-men-expert.mp4",
        "width": 360,
        "height": 480,
        "poster": {
          "src": "/images/work/loreal-men-expert/film-cover.webp",
          "smallSrc": "/images/work/loreal-men-expert/film-cover-480.webp",
          "width": 360,
          "height": 480,
          "smallWidth": 360,
          "alt": "L’Oréal Men Expert — Hydra Energetic — film preview"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "@shotbykill"
      },
      {
        "label": "Production",
        "value": "Unreal Visual"
      },
      {
        "label": "Agency",
        "value": "B&T / McCann Prague"
      },
      {
        "label": "Costumes",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Director’s campaign publication",
        "url": "https://www.instagram.com/p/DUoPG4EEp4z/"
      }
    ],
    "portrait": true,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/DUoPG4EEp4z/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "mbank",
    "slug": "mbank",
    "title": "mBank — Father & son",
    "thumbnail": {
      "src": "/images/work/mbank/wardrobe-still.webp",
      "smallSrc": "/images/work/mbank/wardrobe-still-480.webp",
      "smallWidth": 480,
      "width": 1276,
      "height": 720,
      "alt": "mBank — Father & son — father and child, costumes in the finished film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/DZKAr3nMbjq.mp4",
        "note": "Extracted from this film."
      }
    },
    "images": [
      {
        "src": "/images/work/mbank/wardrobe-still.webp",
        "smallSrc": "/images/work/mbank/wardrobe-still-480.webp",
        "smallWidth": 480,
        "width": 1276,
        "height": 720,
        "alt": "mBank — Father & son — father and child, costumes in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DZKAr3nMbjq.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/mbank/detail-2.webp",
        "smallSrc": "/images/work/mbank/detail-2-480.webp",
        "smallWidth": 480,
        "width": 1276,
        "height": 720,
        "alt": "mBank — Father & son — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DZKAr3nMbjq.mp4",
          "note": "Visually inspected costume frame at 9.629 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/mbank/detail-4.webp",
        "smallSrc": "/images/work/mbank/detail-4-480.webp",
        "smallWidth": 480,
        "width": 1276,
        "height": 720,
        "alt": "mBank — Father & son — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DZKAr3nMbjq.mp4",
          "note": "Visually inspected costume frame at 24.674 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "mBank — Father & son",
        "url": "https://www.instagram.com/p/DZKAr3nMbjq/",
        "src": "/videos/DZKAr3nMbjq.mp4",
        "width": 1276,
        "height": 720,
        "poster": {
          "src": "/images/work/mbank/DZKAr3nMbjq-still-2.webp",
          "smallSrc": "/images/work/mbank/DZKAr3nMbjq-still-2-480.webp",
          "smallWidth": 480,
          "width": 1276,
          "height": 720,
          "alt": "mBank — Father & son — costume in the finished film, frame 2"
        }
      }
    ],
    "credit": "Styling",
    "facts": [
      {
        "label": "Director",
        "value": "Veronika Jelšíková"
      },
      {
        "label": "Production",
        "value": "Boogie Films"
      },
      {
        "label": "Cinematography",
        "value": "Tomáš Šťastný"
      },
      {
        "label": "Agency",
        "value": "DDB.about95"
      },
      {
        "label": "Styling",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/boogiefilms_prague/reel/DZKAr3nMbjq/"
      },
      {
        "label": "Director’s portfolio",
        "url": "https://veronikajelsikova.com/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/boogiefilms_prague/reel/DZKAr3nMbjq/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "pilsner-taste-worth-protecting",
    "slug": "pilsner-taste-worth-protecting",
    "title": "Pilsner Urquell — Taste Worth Protecting",
    "thumbnail": {
      "src": "/images/work/pilsner-taste-worth-protecting/costume-v1-3.webp",
      "smallSrc": "/images/work/pilsner-taste-worth-protecting/costume-v1-3-480.webp",
      "smallWidth": 480,
      "width": 720,
      "height": 412,
      "alt": "Pilsner Urquell — Taste Worth Protecting — costume in the finished film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/C8UV-S1N_eq.mp4",
        "note": "Costume-focused frame at 23.54s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/staropramen/C8UV-S1N_eq-still-3.webp",
        "smallSrc": "/images/work/staropramen/C8UV-S1N_eq-still-3-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 412,
        "alt": "Pilsner Urquell — Taste Worth Protecting — costume in the finished film, frame 3",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UV-S1N_eq.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/pilsner-taste-worth-protecting/detail-3.webp",
        "smallSrc": "/images/work/pilsner-taste-worth-protecting/detail-3-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 412,
        "alt": "Pilsner Urquell — Taste Worth Protecting — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UV-S1N_eq.mp4",
          "note": "Visually inspected costume frame at 37.926 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/pilsner-taste-worth-protecting/costume-v1-3.webp",
        "smallSrc": "/images/work/pilsner-taste-worth-protecting/costume-v1-3-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 412,
        "alt": "Pilsner Urquell — Taste Worth Protecting — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UV-S1N_eq.mp4",
          "note": "Costume-focused frame at 23.54s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/pilsner-taste-worth-protecting/costume-v1-5.webp",
        "smallSrc": "/images/work/pilsner-taste-worth-protecting/costume-v1-5-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 412,
        "alt": "Pilsner Urquell — Taste Worth Protecting — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UV-S1N_eq.mp4",
          "note": "Costume-focused frame at 38.58s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Pilsner Urquell — Taste Worth Protecting",
        "url": "https://www.instagram.com/p/C8UV-S1N_eq/",
        "src": "/videos/C8UV-S1N_eq.mp4",
        "width": 720,
        "height": 412,
        "poster": {
          "src": "/images/work/staropramen/C8UV-S1N_eq-still-1.webp",
          "smallSrc": "/images/work/staropramen/C8UV-S1N_eq-still-1-480.webp",
          "smallWidth": 480,
          "width": 720,
          "height": 412,
          "alt": "Pilsner Urquell — Taste Worth Protecting — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Wolfberg"
      },
      {
        "label": "Production",
        "value": "Boogie Films"
      },
      {
        "label": "Agency",
        "value": "VCCP Prague"
      },
      {
        "label": "Cinematography",
        "value": "Jan Velický"
      },
      {
        "label": "Production design",
        "value": "Henrich Borároš"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UV-S1N_eq/"
      },
      {
        "label": "Campaign",
        "url": "https://www.adsoftheworld.com/campaigns/taste-worth-protecting-no-matter-what"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8UV-S1N_eq/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "orange",
    "slug": "orange",
    "title": "Orange — Hockey generations",
    "thumbnail": {
      "src": "/images/work/orange/costume-v1-4.webp",
      "smallSrc": "/images/work/orange/costume-v1-4-480.webp",
      "smallWidth": 480,
      "width": 720,
      "height": 272,
      "alt": "Orange — Hockey generations — costume in the finished film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/C8ljbbFNNWD.mp4",
        "note": "Costume-focused frame at 13.786s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/orange/C8ljbbFNNWD-still-2.webp",
        "smallSrc": "/images/work/orange/C8ljbbFNNWD-still-2-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 272,
        "alt": "Orange — Hockey generations — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8ljbbFNNWD.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/orange/detail-2.webp",
        "smallSrc": "/images/work/orange/detail-2-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 272,
        "alt": "Orange — Hockey generations — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8ljbbFNNWD.mp4",
          "note": "Visually inspected costume frame at 9.59 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/orange/costume-v1-2.webp",
        "smallSrc": "/images/work/orange/costume-v1-2-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 272,
        "alt": "Orange — Hockey generations — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8ljbbFNNWD.mp4",
          "note": "Costume-focused frame at 6.893s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/orange/costume-v1-4.webp",
        "smallSrc": "/images/work/orange/costume-v1-4-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 272,
        "alt": "Orange — Hockey generations — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8ljbbFNNWD.mp4",
          "note": "Costume-focused frame at 13.786s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/orange/costume-v1-7.webp",
        "smallSrc": "/images/work/orange/costume-v1-7-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 272,
        "alt": "Orange — Hockey generations — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8ljbbFNNWD.mp4",
          "note": "Costume-focused frame at 23.077s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Orange — Hockey generations",
        "url": "https://www.instagram.com/p/C8ljbbFNNWD/",
        "src": "/videos/C8ljbbFNNWD.mp4",
        "width": 720,
        "height": 272,
        "poster": {
          "src": "/images/work/orange/C8ljbbFNNWD-still-1.webp",
          "smallSrc": "/images/work/orange/C8ljbbFNNWD-still-1-480.webp",
          "smallWidth": 480,
          "width": 720,
          "height": 272,
          "alt": "Orange — Hockey generations — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Tomáš Řehořek"
      },
      {
        "label": "Production",
        "value": "Armada Films"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8ljbbFNNWD/"
      },
      {
        "label": "Campaign",
        "url": "https://www.omediach.com/reklama/26464-orange-prichadza-s-novou-kampanou-tvarou-je-hokejova-legenda-video"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8ljbbFNNWD/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "leffe",
    "slug": "leffe",
    "title": "Leffe — Monks & armour",
    "thumbnail": {
      "src": "/images/work/leffe/costume-v1-6.webp",
      "smallSrc": "/images/work/leffe/costume-v1-6-480.webp",
      "smallWidth": 360,
      "width": 480,
      "height": 640,
      "alt": "Leffe — Monks & armour — costume in the finished film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/C8UY_Dctrd9.mp4",
        "note": "Costume-focused frame at 40.848s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/leffe/C8UY_Dctrd9-still-2.webp",
        "smallSrc": "/images/work/leffe/C8UY_Dctrd9-still-2-480.webp",
        "smallWidth": 360,
        "width": 480,
        "height": 640,
        "alt": "Leffe — Monks & armour — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UY_Dctrd9.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/leffe/detail-2.webp",
        "smallSrc": "/images/work/leffe/detail-2-480.webp",
        "smallWidth": 360,
        "width": 480,
        "height": 640,
        "alt": "Leffe — Monks & armour — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UY_Dctrd9.mp4",
          "note": "Visually inspected costume frame at 19.222 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/leffe/costume-v1-6.webp",
        "smallSrc": "/images/work/leffe/costume-v1-6-480.webp",
        "smallWidth": 360,
        "width": 480,
        "height": 640,
        "alt": "Leffe — Monks & armour — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UY_Dctrd9.mp4",
          "note": "Costume-focused frame at 40.848s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/leffe/costume-v1-7.webp",
        "smallSrc": "/images/work/leffe/costume-v1-7-480.webp",
        "smallWidth": 360,
        "width": 480,
        "height": 640,
        "alt": "Leffe — Monks & armour — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UY_Dctrd9.mp4",
          "note": "Costume-focused frame at 46.254s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Leffe — Monks & armour",
        "url": "https://www.instagram.com/p/C8UY_Dctrd9/",
        "src": "/videos/C8UY_Dctrd9.mp4",
        "width": 480,
        "height": 640,
        "poster": {
          "src": "/images/work/leffe/C8UY_Dctrd9-still-1.webp",
          "smallSrc": "/images/work/leffe/C8UY_Dctrd9-still-1-480.webp",
          "smallWidth": 360,
          "width": 480,
          "height": 640,
          "alt": "Leffe — Monks & armour — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Wolfberg"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UY_Dctrd9/"
      },
      {
        "label": "Production",
        "url": "https://www.boogiefilms.com/project/wolfberg"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8UY_Dctrd9/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "talkmore-medieval",
    "slug": "talkmore-duedekning",
    "title": "Talkmore — Duedekning",
    "thumbnail": {
      "src": "/images/work/woodland-costumes/image-1.webp",
      "smallSrc": "/images/work/woodland-costumes/image-1-480.webp",
      "smallWidth": 384,
      "width": 1280,
      "height": 1600,
      "alt": "Talkmore — Duedekning — fitted chain-mail hood, brown tunic and segmented armour",
      "evidence": {
        "basis": "visual-match",
        "videoSrc": "/videos/talkmore-duedekning-hd.mp4",
        "note": "Compared against Einar’s complete 1080p Duedekning film: same two performers, helmet and chin strap, segmented shoulder/body plates, maroon belt and studded leather cuffs; matching chain-mail hood, leaf-shaped shoulders, curved gold neck plate, brown tunic and boots. The separate green workshop armour is not assigned to this film."
      }
    },
    "images": [
      {
        "src": "/images/work/woodland-costumes/image-1.webp",
        "smallSrc": "/images/work/woodland-costumes/image-1-480.webp",
        "smallWidth": 384,
        "width": 1280,
        "height": 1600,
        "alt": "Talkmore — Duedekning — fitted chain-mail hood, brown tunic and segmented armour",
        "evidence": {
          "basis": "visual-match",
          "videoSrc": "/videos/talkmore-duedekning-hd.mp4",
          "note": "Compared against Einar’s complete 1080p Duedekning film: same two performers, helmet and chin strap, segmented shoulder/body plates, maroon belt and studded leather cuffs; matching chain-mail hood, leaf-shaped shoulders, curved gold neck plate, brown tunic and boots. The separate green workshop armour is not assigned to this film."
        }
      },
      {
        "src": "/images/work/talkmore-medieval/verified-hd-1.webp",
        "smallSrc": "/images/work/talkmore-medieval/verified-hd-1-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 708,
        "alt": "Talkmore — Duedekning — steel helmet, shoulder armour and chain-mail hood, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/talkmore-duedekning-hd.mp4",
          "note": "Visually inspected wardrobe frame at 14s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/talkmore-medieval/verified-hd-2.webp",
        "smallSrc": "/images/work/talkmore-medieval/verified-hd-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 708,
        "alt": "Talkmore — Duedekning — layered tunics, leather belts and metal armour, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/talkmore-duedekning-hd.mp4",
          "note": "Visually inspected wardrobe frame at 16.5s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/talkmore-medieval/verified-hd-3.webp",
        "smallSrc": "/images/work/talkmore-medieval/verified-hd-3-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 708,
        "alt": "Talkmore — Duedekning — full-length medieval wardrobes inside the cottage, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/talkmore-duedekning-hd.mp4",
          "note": "Visually inspected wardrobe frame at 20s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/talkmore-medieval/verified-hd-4.webp",
        "smallSrc": "/images/work/talkmore-medieval/verified-hd-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 708,
        "alt": "Talkmore — Duedekning — contrasting armour and layered costumes beside the troll, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/talkmore-duedekning-hd.mp4",
          "note": "Visually inspected wardrobe frame at 26s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/talkmore-medieval/verified-hd-5.webp",
        "smallSrc": "/images/work/talkmore-medieval/verified-hd-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 708,
        "alt": "Talkmore — Duedekning — chain-mail hood, neck plate and segmented armour, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/talkmore-duedekning-hd.mp4",
          "note": "Visually inspected wardrobe frame at 32s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/talkmore-medieval/verified-hd-6.webp",
        "smallSrc": "/images/work/talkmore-medieval/verified-hd-6-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 708,
        "alt": "Talkmore — Duedekning — the three character costumes together, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/talkmore-duedekning-hd.mp4",
          "note": "Visually inspected wardrobe frame at 34.5s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Talkmore — Duedekning",
        "url": "https://einarfilm.no/directors/stian-johansen/duedekning",
        "src": "/videos/talkmore-duedekning-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/talkmore-medieval/verified-hd-poster.webp",
          "smallSrc": "/images/work/talkmore-medieval/verified-hd-poster-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "Talkmore — Duedekning — film preview",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/talkmore-duedekning-hd.mp4",
            "note": "Preview from the exact HD film, preserving its native frame."
          }
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Stian Johansen"
      },
      {
        "label": "Production",
        "value": "Einar Film"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DCT3S7tMzxC/"
      },
      {
        "label": "Director’s portfolio",
        "url": "https://einarfilm.no/directors/stian-johansen"
      },
      {
        "label": "Exact full-resolution production film",
        "url": "https://einarfilm.no/directors/stian-johansen/duedekning"
      },
      {
        "label": "Original costume fitting",
        "url": "https://www.instagram.com/p/DFlPHEJMUbB/"
      }
    ],
    "portrait": true,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DCT3S7tMzxC/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "eon",
    "slug": "eon",
    "title": "E.ON — It’s on us",
    "thumbnail": {
      "src": "/images/work/eon/checked-blazer-upright.webp",
      "smallSrc": "/images/work/eon/checked-blazer-upright-480.webp",
      "smallWidth": 480,
      "width": 1552,
      "height": 1170,
      "alt": "E.ON — It’s on us — checked blazer and blue shirt, published campaign image",
      "evidence": {
        "basis": "same-publication",
        "videoSrc": "/videos/DQd4pgojHgA.mp4",
        "note": "Same E.ON carousel and visibly identical checked blazer/blue shirt in the attached film."
      }
    },
    "images": [
      {
        "src": "/images/work/eon/checked-blazer-upright.webp",
        "smallSrc": "/images/work/eon/checked-blazer-upright-480.webp",
        "smallWidth": 480,
        "width": 1552,
        "height": 1170,
        "alt": "E.ON — It’s on us — checked blazer and blue shirt, published campaign image",
        "evidence": {
          "basis": "same-publication",
          "videoSrc": "/videos/DQd4pgojHgA.mp4",
          "note": "Same E.ON carousel and visibly identical checked blazer/blue shirt in the attached film."
        }
      },
      {
        "src": "/images/work/eon/detail-2.webp",
        "smallSrc": "/images/work/eon/detail-2-480.webp",
        "smallWidth": 363,
        "width": 484,
        "height": 640,
        "alt": "E.ON — It’s on us — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DQd4pgojHgA.mp4",
          "note": "Visually inspected costume frame at 9.162 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/eon/detail-3.webp",
        "smallSrc": "/images/work/eon/detail-3-480.webp",
        "smallWidth": 363,
        "width": 484,
        "height": 640,
        "alt": "E.ON — It’s on us — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DQd4pgojHgA.mp4",
          "note": "Visually inspected costume frame at 16.605 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "E.ON — It’s on us",
        "url": "https://www.instagram.com/p/DQd4pgojHgA/",
        "src": "/videos/DQd4pgojHgA.mp4",
        "width": 484,
        "height": 640
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Mugshots"
      },
      {
        "label": "Production",
        "value": "Boogie Films"
      },
      {
        "label": "Cinematography",
        "value": "Michal Babinec"
      },
      {
        "label": "Production design",
        "value": "@anezka_stra"
      },
      {
        "label": "Agency",
        "value": "VCCP"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DQd4pgojHgA/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DQd4pgojHgA/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "garnier",
    "slug": "garnier",
    "title": "Garnier — Crazy decisions",
    "thumbnail": {
      "src": "/images/work/garnier/costume-v1-3.webp",
      "smallSrc": "/images/work/garnier/costume-v1-3-480.webp",
      "smallWidth": 480,
      "width": 638,
      "height": 360,
      "alt": "Garnier — Crazy decisions — costume in the finished film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/C8UVf4mtukg.mp4",
        "note": "Costume-focused frame at 7.531s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/garnier/detail-3.webp",
        "smallSrc": "/images/work/garnier/detail-3-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "Garnier — Crazy decisions — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVf4mtukg.mp4",
          "note": "Visually inspected costume frame at 12.134 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/garnier/detail-4.webp",
        "smallSrc": "/images/work/garnier/detail-4-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "Garnier — Crazy decisions — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVf4mtukg.mp4",
          "note": "Visually inspected costume frame at 17.154 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/garnier/costume-v1-1.webp",
        "smallSrc": "/images/work/garnier/costume-v1-1-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "Garnier — Crazy decisions — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVf4mtukg.mp4",
          "note": "Costume-focused frame at 2.51s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/garnier/costume-v1-3.webp",
        "smallSrc": "/images/work/garnier/costume-v1-3-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "Garnier — Crazy decisions — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVf4mtukg.mp4",
          "note": "Costume-focused frame at 7.531s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Garnier — Crazy decisions",
        "url": "https://www.instagram.com/p/C8UVf4mtukg/",
        "src": "/videos/C8UVf4mtukg.mp4",
        "width": 638,
        "height": 360,
        "poster": {
          "src": "/images/work/garnier/C8UVf4mtukg-still-1.webp",
          "smallSrc": "/images/work/garnier/C8UVf4mtukg-still-1-480.webp",
          "smallWidth": 480,
          "width": 638,
          "height": 360,
          "alt": "Garnier — Crazy decisions — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Petr Dvořák"
      },
      {
        "label": "Agency",
        "value": "Publicis Groupe"
      },
      {
        "label": "Production",
        "value": "Publicis Groupe"
      },
      {
        "label": "Cinematography",
        "value": "Filip Knoll"
      },
      {
        "label": "Producer",
        "value": "Adam Filus"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UVf4mtukg/"
      },
      {
        "label": "Campaign",
        "url": "https://www.mam.cz/novinky/kreativita-a-kampane/kampane/2024-03/garnier-v-nove-kampani-od-publicis-groupe-bojuje-proti-silenym-resenim-pri-problemech-s-vlasy/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8UVf4mtukg/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "invega",
    "slug": "invega",
    "title": "INVEGA",
    "thumbnail": {
      "src": "/images/work/invega/costume-v1-7.webp",
      "smallSrc": "/images/work/invega/costume-v1-7-480.webp",
      "smallWidth": 480,
      "width": 1276,
      "height": 537,
      "alt": "INVEGA — Home & family — costume in the finished film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/DQKsAeEDOHi.mp4",
        "note": "Costume-focused frame at 103.919s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/invega/DQKsAeEDOHi-still-2.webp",
        "smallSrc": "/images/work/invega/DQKsAeEDOHi-still-2-480.webp",
        "smallWidth": 480,
        "width": 1276,
        "height": 538,
        "alt": "INVEGA — Home & family — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DQKsAeEDOHi.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/invega/detail-4.webp",
        "smallSrc": "/images/work/invega/detail-4-480.webp",
        "smallWidth": 480,
        "width": 1276,
        "height": 537,
        "alt": "INVEGA — Home & family — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DQKsAeEDOHi.mp4",
          "note": "Visually inspected costume frame at 110.667 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/invega/costume-v1-6.webp",
        "smallSrc": "/images/work/invega/costume-v1-6-480.webp",
        "smallWidth": 480,
        "width": 1276,
        "height": 538,
        "alt": "INVEGA — Home & family — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DQKsAeEDOHi.mp4",
          "note": "Costume-focused frame at 91.773s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/invega/costume-v1-7.webp",
        "smallSrc": "/images/work/invega/costume-v1-7-480.webp",
        "smallWidth": 480,
        "width": 1276,
        "height": 537,
        "alt": "INVEGA — Home & family — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/DQKsAeEDOHi.mp4",
          "note": "Costume-focused frame at 103.919s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "INVEGA",
        "url": "https://www.instagram.com/p/DQKsAeEDOHi/",
        "src": "/videos/DQKsAeEDOHi.mp4",
        "width": 1276,
        "height": 720,
        "poster": {
          "src": "/images/work/invega/DQKsAeEDOHi-still-1.webp",
          "smallSrc": "/images/work/invega/DQKsAeEDOHi-still-1-480.webp",
          "smallWidth": 480,
          "width": 1276,
          "height": 720,
          "alt": "INVEGA — Home & family — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Wardrobe styling",
    "facts": [
      {
        "label": "Director",
        "value": "Hans Emanuel"
      },
      {
        "label": "Production",
        "value": "Caviar / Unit+Sofa"
      },
      {
        "label": "Cinematography",
        "value": "Roman Martínez de Bujo"
      },
      {
        "label": "Wardrobe styling",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DQKsAeEDOHi/"
      },
      {
        "label": "Director’s portfolio",
        "url": "https://thesmile.tv/hans-emanuel/"
      },
      {
        "label": "Postproduction team’s campaign credits",
        "url": "https://www.linkedin.com/company/thepost-office/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/DQKsAeEDOHi/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "konto-bariery",
    "slug": "konto-bariery",
    "title": "Konto Bariéry",
    "thumbnail": {
      "src": "/images/work/konto-bariery/detail-2.webp",
      "smallSrc": "/images/work/konto-bariery/detail-2-480.webp",
      "smallWidth": 480,
      "width": 1280,
      "height": 659,
      "alt": "Konto Bariéry — frame from the advert",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/891619491.mp4",
        "note": "Visually inspected costume frame at 9.6 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/konto-bariery/891619491-still-3.webp",
        "smallSrc": "/images/work/konto-bariery/891619491-still-3-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 660,
        "alt": "Konto Bariéry — costume in the finished film, frame 3",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/891619491.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/konto-bariery/detail-2.webp",
        "smallSrc": "/images/work/konto-bariery/detail-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 659,
        "alt": "Konto Bariéry — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/891619491.mp4",
          "note": "Visually inspected costume frame at 9.6 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/konto-bariery/detail-4.webp",
        "smallSrc": "/images/work/konto-bariery/detail-4-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 660,
        "alt": "Konto Bariéry — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/891619491.mp4",
          "note": "Visually inspected costume frame at 24.6 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/konto-bariery/final-detail-1.webp",
        "smallSrc": "/images/work/konto-bariery/final-detail-1-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Konto Bariéry — indoor family wardrobe, striped knitwear and grey shirt, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/891619491.mp4",
          "note": "Visually inspected wardrobe frame at 2.4s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/konto-bariery/final-detail-2.webp",
        "smallSrc": "/images/work/konto-bariery/final-detail-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Konto Bariéry — black roll-neck and grey shirt in close-up, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/891619491.mp4",
          "note": "Visually inspected wardrobe frame at 6.6s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/konto-bariery/final-detail-7.webp",
        "smallSrc": "/images/work/konto-bariery/final-detail-7-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Konto Bariéry — striped jumper at the cinema, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/891619491.mp4",
          "note": "Visually inspected wardrobe frame at 26.4s from the exact film above. Cast, costumes and sets match the original portfolio publication. Not a fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Konto Bariéry",
        "url": "https://vimeo.com/891619491",
        "width": 1280,
        "height": 720,
        "src": "/videos/891619491.mp4",
        "poster": {
          "src": "/images/work/konto-bariery/891619491-still-1.webp",
          "smallSrc": "/images/work/konto-bariery/891619491-still-1-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "Konto Bariéry — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Costume design",
    "facts": [
      {
        "label": "Director",
        "value": "Jakub Žídek"
      },
      {
        "label": "Production",
        "value": "ADvocado Films"
      },
      {
        "label": "Cinematography",
        "value": "Tomáš Šťastný"
      },
      {
        "label": "Agency",
        "value": "VCCP"
      },
      {
        "label": "Costume design",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Wardrobe styling",
        "value": "Adéla Terčová"
      }
    ],
    "sources": [
      {
        "label": "Production credits",
        "url": "https://www.advocadofilms.com/work/"
      },
      {
        "label": "Explicit professional credit",
        "url": "https://vimeo.com/891619491"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/891619491",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for costume design."
    }
  },
  {
    "id": "mcdonalds-kitchen",
    "slug": "mcdonalds-ronald-mcdonald-house",
    "title": "McDonald’s — Dům Ronalda McDonalda",
    "thumbnail": {
      "src": "/images/work/mcdonalds-kitchen/C8h_7oZtFtv-still-2.webp",
      "smallSrc": "/images/work/mcdonalds-kitchen/C8h_7oZtFtv-still-2-480.webp",
      "smallWidth": 480,
      "width": 720,
      "height": 400,
      "alt": "McDonald’s — Kitchen — costume in the finished film, frame 2",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/C8h_7oZtFtv.mp4",
        "note": "Extracted from this film."
      }
    },
    "images": [
      {
        "src": "/images/work/mcdonalds-kitchen/C8h_7oZtFtv-still-2.webp",
        "smallSrc": "/images/work/mcdonalds-kitchen/C8h_7oZtFtv-still-2-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 400,
        "alt": "McDonald’s — Kitchen — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8h_7oZtFtv.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/mcdonalds-kitchen/detail-2.webp",
        "smallSrc": "/images/work/mcdonalds-kitchen/detail-2-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 400,
        "alt": "McDonald’s — Kitchen — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8h_7oZtFtv.mp4",
          "note": "Visually inspected costume frame at 9.318 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/mcdonalds-kitchen/detail-4.webp",
        "smallSrc": "/images/work/mcdonalds-kitchen/detail-4-480.webp",
        "smallWidth": 480,
        "width": 720,
        "height": 400,
        "alt": "McDonald’s — Kitchen — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8h_7oZtFtv.mp4",
          "note": "Visually inspected costume frame at 23.878 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "McDonald’s — Dům Ronalda McDonalda",
        "url": "https://www.instagram.com/p/C8h_7oZtFtv/",
        "src": "/videos/C8h_7oZtFtv.mp4",
        "width": 720,
        "height": 400,
        "poster": {
          "src": "/images/work/mcdonalds-kitchen/C8h_7oZtFtv-still-1.webp",
          "smallSrc": "/images/work/mcdonalds-kitchen/C8h_7oZtFtv-still-1-480.webp",
          "smallWidth": 480,
          "width": 720,
          "height": 400,
          "alt": "McDonald’s — Kitchen — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Brand",
        "value": "McDonald’s"
      },
      {
        "label": "Organisation",
        "value": "Dům Ronalda McDonalda"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8h_7oZtFtv/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8h_7oZtFtv/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "innogy-domaci-asistence",
    "slug": "innogy-domaci-asistence",
    "title": "innogy — Domácí asistence",
    "thumbnail": {
      "src": "/images/work/innogy-domaci-asistence/official-hd-1.webp",
      "smallSrc": "/images/work/innogy-domaci-asistence/official-hd-1-480.webp",
      "smallWidth": 480,
      "width": 1920,
      "height": 1080,
      "alt": "innogy — Domácí asistence — green overshirt and yellow T-shirt, film still",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/innogy-domaci-asistence-hd.mp4",
        "note": "Inspected frame at 1.3244s from innogycz’s complete 33-second official advert. Same performers, green/yellow outfit, grandfather’s shirt changes, red cardigan, blue repair uniform, kitchen/laundry story and end card as Dušan’s cropped Instagram repost. Not a fitting or BTS photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/innogy-domaci-asistence/official-hd-1.webp",
        "smallSrc": "/images/work/innogy-domaci-asistence/official-hd-1-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "innogy — Domácí asistence — green overshirt and yellow T-shirt, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/innogy-domaci-asistence-hd.mp4",
          "note": "Inspected frame at 1.3244s from innogycz’s complete 33-second official advert. Same performers, green/yellow outfit, grandfather’s shirt changes, red cardigan, blue repair uniform, kitchen/laundry story and end card as Dušan’s cropped Instagram repost. Not a fitting or BTS photograph."
        }
      },
      {
        "src": "/images/work/innogy-domaci-asistence/official-hd-2.webp",
        "smallSrc": "/images/work/innogy-domaci-asistence/official-hd-2-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "innogy — Domácí asistence — green shirt and braces with the laundry basket, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/innogy-domaci-asistence-hd.mp4",
          "note": "Inspected frame at 11.8s from innogycz’s complete 33-second official advert. Same performers, green/yellow outfit, grandfather’s shirt changes, red cardigan, blue repair uniform, kitchen/laundry story and end card as Dušan’s cropped Instagram repost. Not a fitting or BTS photograph."
        }
      },
      {
        "src": "/images/work/innogy-domaci-asistence/official-hd-3.webp",
        "smallSrc": "/images/work/innogy-domaci-asistence/official-hd-3-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "innogy — Domácí asistence — pale shirt and striped braces, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/innogy-domaci-asistence-hd.mp4",
          "note": "Inspected frame at 14.9s from innogycz’s complete 33-second official advert. Same performers, green/yellow outfit, grandfather’s shirt changes, red cardigan, blue repair uniform, kitchen/laundry story and end card as Dušan’s cropped Instagram repost. Not a fitting or BTS photograph."
        }
      },
      {
        "src": "/images/work/innogy-domaci-asistence/official-hd-4.webp",
        "smallSrc": "/images/work/innogy-domaci-asistence/official-hd-4-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "innogy — Domácí asistence — red cardigan over a black-and-white striped shirt, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/innogy-domaci-asistence-hd.mp4",
          "note": "Inspected frame at 17.4s from innogycz’s complete 33-second official advert. Same performers, green/yellow outfit, grandfather’s shirt changes, red cardigan, blue repair uniform, kitchen/laundry story and end card as Dušan’s cropped Instagram repost. Not a fitting or BTS photograph."
        }
      },
      {
        "src": "/images/work/innogy-domaci-asistence/official-hd-5.webp",
        "smallSrc": "/images/work/innogy-domaci-asistence/official-hd-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "innogy — Domácí asistence — blue repairer’s polo shirt and overalls, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/innogy-domaci-asistence-hd.mp4",
          "note": "Inspected frame at 21.5s from innogycz’s complete 33-second official advert. Same performers, green/yellow outfit, grandfather’s shirt changes, red cardigan, blue repair uniform, kitchen/laundry story and end card as Dušan’s cropped Instagram repost. Not a fitting or BTS photograph."
        }
      },
      {
        "src": "/images/work/innogy-domaci-asistence/official-hd-6.webp",
        "smallSrc": "/images/work/innogy-domaci-asistence/official-hd-6-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "innogy — Domácí asistence — the family’s contrasting domestic wardrobes, film still",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/innogy-domaci-asistence-hd.mp4",
          "note": "Inspected frame at 28s from innogycz’s complete 33-second official advert. Same performers, green/yellow outfit, grandfather’s shirt changes, red cardigan, blue repair uniform, kitchen/laundry story and end card as Dušan’s cropped Instagram repost. Not a fitting or BTS photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "innogy — Domácí asistence",
        "url": "https://www.youtube.com/watch?v=kIVgujoxAFQ",
        "src": "/videos/innogy-domaci-asistence-hd.mp4",
        "width": 1920,
        "height": 1080,
        "poster": {
          "src": "/images/work/innogy-domaci-asistence/official-hd-1.webp",
          "smallSrc": "/images/work/innogy-domaci-asistence/official-hd-1-480.webp",
          "smallWidth": 480,
          "width": 1920,
          "height": 1080,
          "alt": "innogy — Domácí asistence — green overshirt and yellow T-shirt, film still",
          "evidence": {
            "basis": "film-frame",
            "videoSrc": "/videos/innogy-domaci-asistence-hd.mp4",
            "note": "Inspected frame at 1.3244s from innogycz’s complete 33-second official advert. Same performers, green/yellow outfit, grandfather’s shirt changes, red cardigan, blue repair uniform, kitchen/laundry story and end card as Dušan’s cropped Instagram repost. Not a fitting or BTS photograph."
          }
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Jiří Havelka"
      },
      {
        "label": "Production",
        "value": "Armada Films"
      },
      {
        "label": "Agency",
        "value": "VML"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8TzvRXNBoK/"
      },
      {
        "label": "Campaign",
        "url": "https://www.mediar.cz/galerie-reklamy/innogy-laka-na-bezplatne-opravy-spotrebicu-ke-smlouve-na-energie/"
      },
      {
        "label": "Exact official full-HD film",
        "url": "https://www.youtube.com/watch?v=kIVgujoxAFQ"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8TzvRXNBoK/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "telekom",
    "slug": "telekom",
    "title": "Telekom — Christmas bookshop",
    "thumbnail": {
      "src": "/images/work/bookshop-film/cover.webp",
      "smallSrc": "/images/work/bookshop-film/cover-480.webp",
      "smallWidth": 270,
      "width": 563,
      "height": 1000,
      "alt": "Bookshop — Film"
    },
    "images": [
      {
        "src": "/images/work/telekom/C8TzysvtOur-still-3.webp",
        "smallSrc": "/images/work/telekom/C8TzysvtOur-still-3-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Telekom — Christmas bookshop — costume in the finished film, frame 3",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8TzysvtOur.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/telekom/detail-2.webp",
        "smallSrc": "/images/work/telekom/detail-2-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Telekom — Christmas bookshop — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8TzysvtOur.mp4",
          "note": "Visually inspected costume frame at 19.213 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/telekom/detail-3.webp",
        "smallSrc": "/images/work/telekom/detail-3-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Telekom — Christmas bookshop — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8TzysvtOur.mp4",
          "note": "Visually inspected costume frame at 34.823 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Telekom — Christmas bookshop",
        "url": "https://www.instagram.com/p/C8TzysvtOur/",
        "src": "/videos/C8TzysvtOur.mp4",
        "width": 720,
        "height": 1280,
        "poster": {
          "src": "/images/work/telekom/C8TzysvtOur-still-2.webp",
          "smallSrc": "/images/work/telekom/C8TzysvtOur-still-2-480.webp",
          "smallWidth": 270,
          "width": 720,
          "height": 1280,
          "alt": "Telekom — Christmas bookshop — costume in the finished film, frame 2"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Adam Hashemi"
      },
      {
        "label": "Production",
        "value": "Armada Films"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8TzysvtOur/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8TzysvtOur/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "mbank-maxmilian-turek",
    "slug": "mbank-maxmilian-turek",
    "title": "mBank — Colourful wardrobes",
    "thumbnail": {
      "src": "/images/work/mbank-maxmilian-turek/detail-2.webp",
      "smallSrc": "/images/work/mbank-maxmilian-turek/detail-2-480.webp",
      "smallWidth": 270,
      "width": 720,
      "height": 1280,
      "alt": "mBank — Everyday colour — frame from the advert",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/C8madAFtC4z.mp4",
        "note": "Visually inspected costume frame at 9.6 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/mbank-maxmilian-turek/C8madAFtC4z-still-2.webp",
        "smallSrc": "/images/work/mbank-maxmilian-turek/C8madAFtC4z-still-2-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "mBank — Everyday colour — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8madAFtC4z.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/mbank-maxmilian-turek/detail-2.webp",
        "smallSrc": "/images/work/mbank-maxmilian-turek/detail-2-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "mBank — Everyday colour — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8madAFtC4z.mp4",
          "note": "Visually inspected costume frame at 9.6 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/mbank-maxmilian-turek/detail-3.webp",
        "smallSrc": "/images/work/mbank-maxmilian-turek/detail-3-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "mBank — Everyday colour — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8madAFtC4z.mp4",
          "note": "Visually inspected costume frame at 17.4 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "mBank — Colourful wardrobes",
        "url": "https://www.instagram.com/p/C8madAFtC4z/",
        "src": "/videos/C8madAFtC4z.mp4",
        "width": 720,
        "height": 1280,
        "poster": {
          "src": "/images/work/mbank-maxmilian-turek/C8madAFtC4z-still-1.webp",
          "smallSrc": "/images/work/mbank-maxmilian-turek/C8madAFtC4z-still-1-480.webp",
          "smallWidth": 270,
          "width": 720,
          "height": 1280,
          "alt": "mBank — Everyday colour — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Maxmilián Turek"
      },
      {
        "label": "Production",
        "value": "Boogie Films"
      },
      {
        "label": "Agency",
        "value": "DDB Prague"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8madAFtC4z/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8madAFtC4z/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "pilsner-urquell",
    "slug": "pilsner-urquell",
    "title": "Pilsner Urquell — At the pub",
    "thumbnail": {
      "src": "/images/work/pilsner-urquell/C8UVrB8tIMe-still-1.webp",
      "smallSrc": "/images/work/pilsner-urquell/C8UVrB8tIMe-still-1-480.webp",
      "smallWidth": 480,
      "width": 638,
      "height": 360,
      "alt": "Pilsner Urquell — At the pub — costume in the finished film, frame 1"
    },
    "images": [
      {
        "src": "/images/work/pilsner-urquell/C8UVrB8tIMe-still-2.webp",
        "smallSrc": "/images/work/pilsner-urquell/C8UVrB8tIMe-still-2-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "Pilsner Urquell — At the pub — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVrB8tIMe.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/pilsner-urquell/costume-v1-2.webp",
        "smallSrc": "/images/work/pilsner-urquell/costume-v1-2-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "Pilsner Urquell — At the pub — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVrB8tIMe.mp4",
          "note": "Costume-focused frame at 4.602s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/pilsner-urquell/costume-v1-5.webp",
        "smallSrc": "/images/work/pilsner-urquell/costume-v1-5-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "Pilsner Urquell — At the pub — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVrB8tIMe.mp4",
          "note": "Costume-focused frame at 11.806s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/pilsner-urquell/costume-v1-8.webp",
        "smallSrc": "/images/work/pilsner-urquell/costume-v1-8-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "Pilsner Urquell — At the pub — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVrB8tIMe.mp4",
          "note": "Costume-focused frame at 17.409s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Pilsner Urquell — At the pub",
        "url": "https://www.instagram.com/p/C8UVrB8tIMe/",
        "src": "/videos/C8UVrB8tIMe.mp4",
        "width": 638,
        "height": 360,
        "poster": {
          "src": "/images/work/pilsner-urquell/C8UVrB8tIMe-still-1.webp",
          "smallSrc": "/images/work/pilsner-urquell/C8UVrB8tIMe-still-1-480.webp",
          "smallWidth": 480,
          "width": 638,
          "height": 360,
          "alt": "Pilsner Urquell — At the pub — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Petr Dvořák"
      },
      {
        "label": "Production",
        "value": "Punk Film"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UVrB8tIMe/"
      },
      {
        "label": "Director’s portfolio",
        "url": "https://charliepapa.cz/director/petr-dvorak/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8UVrB8tIMe/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "tropicana-vitality",
    "slug": "tropicana-vitality",
    "title": "Tropicana — Vitality",
    "thumbnail": {
      "src": "/images/work/tropicana-vitality/wardrobe-still.webp",
      "smallSrc": "/images/work/tropicana-vitality/wardrobe-still-480.webp",
      "smallWidth": 480,
      "width": 1280,
      "height": 720,
      "alt": "Tropicana — office wardrobe in the finished film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/272173846.mp4",
        "note": "Extracted from this film."
      }
    },
    "images": [
      {
        "src": "/images/work/tropicana-vitality/wardrobe-still.webp",
        "smallSrc": "/images/work/tropicana-vitality/wardrobe-still-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Tropicana — office wardrobe in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/272173846.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/tropicana-vitality/costume-v1-1.webp",
        "smallSrc": "/images/work/tropicana-vitality/costume-v1-1-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Tropicana — Vitality — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/272173846.mp4",
          "note": "Costume-focused frame at 2.401s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/tropicana-vitality/costume-v1-2.webp",
        "smallSrc": "/images/work/tropicana-vitality/costume-v1-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 720,
        "alt": "Tropicana — Vitality — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/272173846.mp4",
          "note": "Costume-focused frame at 4.602s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Tropicana — Vitality",
        "url": "https://vimeo.com/272173846",
        "width": 1280,
        "height": 720,
        "src": "/videos/272173846.mp4",
        "poster": {
          "src": "/images/work/tropicana-vitality/272173846-still-4.webp",
          "smallSrc": "/images/work/tropicana-vitality/272173846-still-4-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "Tropicana — Vitality — costume in the finished film, frame 4"
        }
      }
    ],
    "credit": "Wardrobe styling",
    "facts": [
      {
        "label": "Live-action director",
        "value": "Roman Valent"
      },
      {
        "label": "Animation director",
        "value": "Douglas Bowden"
      },
      {
        "label": "Prague production",
        "value": "Creative Embassy"
      },
      {
        "label": "Cinematography",
        "value": "Dušan Husár"
      },
      {
        "label": "Production",
        "value": "TROUBLEMAKERS"
      },
      {
        "label": "Agency",
        "value": "CLM BBDO Paris"
      },
      {
        "label": "Wardrobe styling",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Production credits",
        "url": "https://www.adsoftheworld.com/campaigns/vitality-tropicana"
      },
      {
        "label": "Production",
        "url": "https://troublemakers.tv/films/troublemakers-tropicana-vitality/"
      },
      {
        "label": "Explicit professional credit",
        "url": "https://vimeo.com/272173846"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/272173846",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for wardrobe styling."
    }
  },
  {
    "id": "deeptime",
    "slug": "deeptime",
    "title": "Deeptime — We Turn Sand Into Sound",
    "thumbnail": {
      "src": "/images/work/deeptime/costume-v1-2.webp",
      "smallSrc": "/images/work/deeptime/costume-v1-2-480.webp",
      "smallWidth": 480,
      "width": 1280,
      "height": 549,
      "alt": "Deeptime — We Turn Sand Into Sound — costume in the finished film",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/307295801.mp4",
        "note": "Costume-focused frame at 25.134s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/deeptime/307295801-still-2.webp",
        "smallSrc": "/images/work/deeptime/307295801-still-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 547,
        "alt": "Deeptime — We Turn Sand Into Sound — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/307295801.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/deeptime/costume-v1-2.webp",
        "smallSrc": "/images/work/deeptime/costume-v1-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 549,
        "alt": "Deeptime — We Turn Sand Into Sound — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/307295801.mp4",
          "note": "Costume-focused frame at 25.134s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/deeptime/costume-v1-6.webp",
        "smallSrc": "/images/work/deeptime/costume-v1-6-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 548,
        "alt": "Deeptime — We Turn Sand Into Sound — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/307295801.mp4",
          "note": "Costume-focused frame at 74.31s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/deeptime/costume-v1-7.webp",
        "smallSrc": "/images/work/deeptime/costume-v1-7-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 547,
        "alt": "Deeptime — We Turn Sand Into Sound — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/307295801.mp4",
          "note": "Costume-focused frame at 84.146s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Deeptime — We Turn Sand Into Sound",
        "url": "https://vimeo.com/307295801",
        "width": 1280,
        "height": 720,
        "src": "/videos/307295801.mp4",
        "poster": {
          "src": "/images/work/deeptime/307295801-still-1.webp",
          "smallSrc": "/images/work/deeptime/307295801-still-1-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "Deeptime — We Turn Sand Into Sound — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Costume design",
    "facts": [
      {
        "label": "Director",
        "value": "Luboš Vacke"
      },
      {
        "label": "Production",
        "value": "Creative Embassy"
      },
      {
        "label": "Cinematography",
        "value": "David Hofmann"
      },
      {
        "label": "Costume design",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Production credits",
        "url": "https://www.creativeembassy.net/vacke-deeptime"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.creativeembassy.net/vacke-deeptime",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for costume design."
    }
  },
  {
    "id": "bitmarkets",
    "slug": "bitmarkets",
    "title": "BITmarkets — Investor stories",
    "thumbnail": {
      "src": "/images/work/casino-film/cover.webp",
      "smallSrc": "/images/work/casino-film/cover-480.webp",
      "smallWidth": 480,
      "width": 720,
      "height": 405,
      "alt": "Casino — Film"
    },
    "images": [
      {
        "src": "/images/work/bitmarkets/C8UVQNPt85_-still-2.webp",
        "smallSrc": "/images/work/bitmarkets/C8UVQNPt85_-still-2-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "BITmarkets — Investor stories — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVQNPt85_.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/bitmarkets/detail-2.webp",
        "smallSrc": "/images/work/bitmarkets/detail-2-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "BITmarkets — Investor stories — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVQNPt85_.mp4",
          "note": "Visually inspected costume frame at 11.203 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/bitmarkets/detail-4.webp",
        "smallSrc": "/images/work/bitmarkets/detail-4-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "BITmarkets — Investor stories — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UVQNPt85_.mp4",
          "note": "Visually inspected costume frame at 28.708 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "BITmarkets — Investor stories",
        "url": "https://www.instagram.com/p/C8UVQNPt85_/",
        "src": "/videos/C8UVQNPt85_.mp4",
        "width": 638,
        "height": 360,
        "poster": {
          "src": "/images/work/bitmarkets/C8UVQNPt85_-still-1.webp",
          "smallSrc": "/images/work/bitmarkets/C8UVQNPt85_-still-1-480.webp",
          "smallWidth": 480,
          "width": 638,
          "height": 360,
          "alt": "BITmarkets — Investor stories — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Petr Dvořák"
      },
      {
        "label": "Production",
        "value": "Punk Film"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UVQNPt85_/"
      },
      {
        "label": "Director’s portfolio",
        "url": "https://charliepapa.cz/director/petr-dvorak/"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8UVQNPt85_/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "lego-ninjago",
    "slug": "lego-ninjago",
    "title": "LEGO NINJAGO — Gift Like a Ninja",
    "thumbnail": {
      "src": "/images/work/lego-ninjago/detail-1.webp",
      "smallSrc": "/images/work/lego-ninjago/detail-1-480.webp",
      "smallWidth": 480,
      "width": 638,
      "height": 360,
      "alt": "LEGO NINJAGO — Gift Like a Ninja — frame from the advert",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/C8UezzXNHd1.mp4",
        "note": "Visually inspected costume frame at 1.206 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
      }
    },
    "images": [
      {
        "src": "/images/work/lego-ninjago/detail-1.webp",
        "smallSrc": "/images/work/lego-ninjago/detail-1-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "LEGO NINJAGO — Gift Like a Ninja — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UezzXNHd1.mp4",
          "note": "Visually inspected costume frame at 1.206 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/lego-ninjago/detail-4.webp",
        "smallSrc": "/images/work/lego-ninjago/detail-4-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "LEGO NINJAGO — Gift Like a Ninja — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UezzXNHd1.mp4",
          "note": "Visually inspected costume frame at 12.357 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/lego-ninjago/costume-v1-1.webp",
        "smallSrc": "/images/work/lego-ninjago/costume-v1-1-480.webp",
        "smallWidth": 480,
        "width": 638,
        "height": 360,
        "alt": "LEGO NINJAGO — Gift Like a Ninja — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8UezzXNHd1.mp4",
          "note": "Costume-focused frame at 1.808s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "LEGO NINJAGO — Gift Like a Ninja",
        "url": "https://www.instagram.com/p/C8UezzXNHd1/",
        "src": "/videos/C8UezzXNHd1.mp4",
        "width": 638,
        "height": 360,
        "poster": {
          "src": "/images/work/lego-ninjago/C8UezzXNHd1-still-1.webp",
          "smallSrc": "/images/work/lego-ninjago/C8UezzXNHd1-still-1-480.webp",
          "smallWidth": 480,
          "width": 638,
          "height": 360,
          "alt": "LEGO NINJAGO — Dragons Rising — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Peder Pedersen"
      },
      {
        "label": "Production",
        "value": "The Great Escape"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8UezzXNHd1/"
      },
      {
        "label": "Director’s portfolio",
        "url": "https://www.klubmoderne.dk/instruktor/peder-pedersen"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8UezzXNHd1/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "bolito-one-damn-photo",
    "slug": "bolito-one-damn-photo",
    "title": "Vagonáři — One Damn Photo",
    "thumbnail": {
      "src": "/images/work/bolito-one-damn-photo/238833581-still-2.webp",
      "smallSrc": "/images/work/bolito-one-damn-photo/238833581-still-2-480.webp",
      "smallWidth": 480,
      "width": 1280,
      "height": 476,
      "alt": "Bolito — One Damn Photo — costume in the finished film, frame 2",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/238833581.mp4",
        "note": "Extracted from this film."
      }
    },
    "images": [
      {
        "src": "/images/work/bolito-one-damn-photo/238833581-still-2.webp",
        "smallSrc": "/images/work/bolito-one-damn-photo/238833581-still-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 476,
        "alt": "Bolito — One Damn Photo — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/238833581.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/bolito-one-damn-photo/detail-1.webp",
        "smallSrc": "/images/work/bolito-one-damn-photo/detail-1-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 476,
        "alt": "Vagonáři — One Damn Photo — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/238833581.mp4",
          "note": "Visually inspected costume frame at 7.201 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/bolito-one-damn-photo/detail-4.webp",
        "smallSrc": "/images/work/bolito-one-damn-photo/detail-4-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 478,
        "alt": "Vagonáři — One Damn Photo — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/238833581.mp4",
          "note": "Visually inspected costume frame at 73.808 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Vagonáři — One Damn Photo",
        "url": "https://vimeo.com/238833581",
        "width": 1280,
        "height": 720,
        "src": "/videos/238833581.mp4",
        "poster": {
          "src": "/images/work/bolito-one-damn-photo/238833581-still-1.webp",
          "smallSrc": "/images/work/bolito-one-damn-photo/238833581-still-1-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "Bolito — One Damn Photo — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Costume design",
    "facts": [
      {
        "label": "Director",
        "value": "Luboš Vacke"
      },
      {
        "label": "Production",
        "value": "Creative Embassy"
      },
      {
        "label": "Cinematography",
        "value": "David Hofmann"
      },
      {
        "label": "Costume design",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Costume assistant",
        "value": "Adéla Vladyková"
      }
    ],
    "sources": [
      {
        "label": "Production credits",
        "url": "https://www.adsoftheworld.com/campaigns/one-damn-photo"
      },
      {
        "label": "Explicit professional credit",
        "url": "https://vimeo.com/238833581"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/238833581",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for costume design."
    }
  },
  {
    "id": "bolito",
    "slug": "bolito",
    "title": "Bolíto — 70 °C",
    "thumbnail": {
      "src": "/images/work/bolito/466122798-still-3.webp",
      "smallSrc": "/images/work/bolito/466122798-still-3-480.webp",
      "smallWidth": 480,
      "width": 1280,
      "height": 556,
      "alt": "Bolito — costume in the finished film, frame 3",
      "evidence": {
        "basis": "film-frame",
        "videoSrc": "/videos/466122798.mp4",
        "note": "Extracted from this film."
      }
    },
    "images": [
      {
        "src": "/images/work/bolito/466122798-still-3.webp",
        "smallSrc": "/images/work/bolito/466122798-still-3-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 556,
        "alt": "Bolito — costume in the finished film, frame 3",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/466122798.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/bolito/detail-2.webp",
        "smallSrc": "/images/work/bolito/detail-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 556,
        "alt": "Bolíto — 70 °C — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/466122798.mp4",
          "note": "Visually inspected costume frame at 17.933 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/bolito/costume-v1-1.webp",
        "smallSrc": "/images/work/bolito/costume-v1-1-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 556,
        "alt": "Bolíto — 70 °C — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/466122798.mp4",
          "note": "Costume-focused frame at 6.725s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/bolito/costume-v1-2.webp",
        "smallSrc": "/images/work/bolito/costume-v1-2-480.webp",
        "smallWidth": 480,
        "width": 1280,
        "height": 556,
        "alt": "Bolíto — 70 °C — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/466122798.mp4",
          "note": "Costume-focused frame at 12.889s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Bolíto — 70 °C",
        "url": "https://vimeo.com/466122798",
        "width": 1280,
        "height": 720,
        "src": "/videos/466122798.mp4",
        "poster": {
          "src": "/images/work/bolito/466122798-still-1.webp",
          "smallSrc": "/images/work/bolito/466122798-still-1-480.webp",
          "smallWidth": 480,
          "width": 1280,
          "height": 720,
          "alt": "Bolito — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "Costume design",
    "facts": [
      {
        "label": "Director",
        "value": "Luboš Vacke"
      },
      {
        "label": "Production",
        "value": "Creative Embassy"
      },
      {
        "label": "Cinematography",
        "value": "Filip Marek"
      },
      {
        "label": "Costume design",
        "value": "Dušan Bebčák"
      }
    ],
    "sources": [
      {
        "label": "Production credits",
        "url": "https://vimeo.com/466122798"
      },
      {
        "label": "Campaign",
        "url": "https://ct24.ceskatelevize.cz/clanek/domaci/zradne-urazy-popaleninam-deti-lze-vetsinou-zabranit-prevenci-rikaji-odbornici-43469"
      }
    ],
    "portrait": false,
    "scope": "campaign",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://vimeo.com/466122798",
      "note": "Exact director/producer campaign credits explicitly name Dušan Bebčák for costume design."
    }
  },
  {
    "id": "skoda-split-screen",
    "slug": "skoda-split-screen",
    "title": "Škoda Superb — Split-screen campaign",
    "thumbnail": {
      "src": "/images/work/skoda-split-screen/published-4.webp",
      "smallSrc": "/images/work/skoda-split-screen/published-4-480.webp",
      "smallWidth": 480,
      "width": 1944,
      "height": 1093,
      "alt": "skoda split screen — published campaign photograph",
      "evidence": {
        "basis": "unassigned",
        "note": "Director’s exact split-screen Superb campaign publication credits @bebcak. The actress and brown jacket match its film; no playable film is attached because the recovered DASH tracks have inconsistent timing."
      }
    },
    "images": [
      {
        "src": "/images/work/skoda-split-screen/published-4.webp",
        "smallSrc": "/images/work/skoda-split-screen/published-4-480.webp",
        "smallWidth": 480,
        "width": 1944,
        "height": 1093,
        "alt": "Škoda Superb — City & forest — published campaign image 1",
        "evidence": {
          "basis": "unassigned",
          "note": "Director’s exact split-screen Superb campaign publication credits @bebcak. The actress and brown jacket match its film; no playable film is attached because the recovered DASH tracks have inconsistent timing."
        }
      },
      {
        "src": "/images/work/skoda-split-screen/published-9.webp",
        "smallSrc": "/images/work/skoda-split-screen/published-9-480.webp",
        "smallWidth": 480,
        "width": 2274,
        "height": 1283,
        "alt": "Škoda Superb — City & forest — published campaign image 2",
        "evidence": {
          "basis": "unassigned",
          "note": "Director’s exact split-screen Superb campaign publication credits @bebcak. The actress and brown jacket match its film; no playable film is attached because the recovered DASH tracks have inconsistent timing."
        }
      },
      {
        "src": "/images/work/skoda-split-screen/film-detail-3.webp",
        "smallSrc": "/images/work/skoda-split-screen/film-detail-3-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Škoda Superb — City & forest — checked coat, shirt and glasses, frame from the film",
        "evidence": {
          "basis": "unassigned",
          "note": "Visually reviewed frame from this exact credited publication’s film. Kept in the verified photographic collection without attaching an incorrectly timed film."
        }
      },
      {
        "src": "/images/work/skoda-split-screen/film-detail-5.webp",
        "smallSrc": "/images/work/skoda-split-screen/film-detail-5-480.webp",
        "smallWidth": 480,
        "width": 1920,
        "height": 1080,
        "alt": "Škoda Superb — City & forest — contrasting outdoor wardrobes, frame from the film",
        "evidence": {
          "basis": "unassigned",
          "note": "Visually reviewed frame from this exact credited publication’s film. Kept in the verified photographic collection without attaching an incorrectly timed film."
        }
      }
    ],
    "videos": [],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "@shotbykill"
      },
      {
        "label": "Production",
        "value": "Heroes Prague"
      },
      {
        "label": "Agency",
        "value": "FCB London"
      },
      {
        "label": "Costumes",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Photography",
        "value": "Vojtěch Veškrna"
      }
    ],
    "sources": [
      {
        "label": "Director’s exact campaign publication",
        "url": "https://www.instagram.com/p/DbJJC7pGubh/"
      }
    ],
    "portrait": false,
    "scope": "study",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/DbJJC7pGubh/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "skoda-social-stories",
    "slug": "skoda-social-stories",
    "title": "Škoda — Social stories",
    "thumbnail": {
      "src": "/images/work/skoda-social-stories/published-24.webp",
      "smallSrc": "/images/work/skoda-social-stories/published-24-480.webp",
      "smallWidth": 384,
      "width": 1080,
      "height": 1350,
      "alt": "skoda social stories — published campaign photograph",
      "evidence": {
        "basis": "unassigned",
        "note": "Director’s client-specific campaign publication explicitly credits @bebcak. No film is attached: these photographs are not paired with the unrelated 130-year advert."
      }
    },
    "images": [
      {
        "src": "/images/work/skoda-social-stories/published-24.webp",
        "smallSrc": "/images/work/skoda-social-stories/published-24-480.webp",
        "smallWidth": 384,
        "width": 1080,
        "height": 1350,
        "alt": "Škoda — Social stories — published campaign image 1",
        "evidence": {
          "basis": "unassigned",
          "note": "Director’s client-specific campaign publication explicitly credits @bebcak. No film is attached: these photographs are not paired with the unrelated 130-year advert."
        }
      },
      {
        "src": "/images/work/skoda-social-stories/published-15.webp",
        "smallSrc": "/images/work/skoda-social-stories/published-15-480.webp",
        "smallWidth": 384,
        "width": 1080,
        "height": 1350,
        "alt": "Škoda — Social stories — published campaign image 2",
        "evidence": {
          "basis": "unassigned",
          "note": "Director’s client-specific campaign publication explicitly credits @bebcak. No film is attached: these photographs are not paired with the unrelated 130-year advert."
        }
      },
      {
        "src": "/images/work/skoda-social-stories/published-25.webp",
        "smallSrc": "/images/work/skoda-social-stories/published-25-480.webp",
        "smallWidth": 384,
        "width": 1080,
        "height": 1350,
        "alt": "Škoda — Social stories — published campaign image 3",
        "evidence": {
          "basis": "unassigned",
          "note": "Director’s client-specific campaign publication explicitly credits @bebcak. No film is attached: these photographs are not paired with the unrelated 130-year advert."
        }
      },
      {
        "src": "/images/work/skoda-social-stories/published-22.webp",
        "smallSrc": "/images/work/skoda-social-stories/published-22-480.webp",
        "smallWidth": 384,
        "width": 1080,
        "height": 1350,
        "alt": "Škoda — Social stories — published campaign image 4",
        "evidence": {
          "basis": "unassigned",
          "note": "Director’s client-specific campaign publication explicitly credits @bebcak. No film is attached: these photographs are not paired with the unrelated 130-year advert."
        }
      },
      {
        "src": "/images/work/skoda-social-stories/published-extra-13.webp",
        "smallSrc": "/images/work/skoda-social-stories/published-extra-13-480.webp",
        "smallWidth": 384,
        "width": 1536,
        "height": 1920,
        "alt": "Škoda — Social stories — purple character mask and sleeveless costume",
        "evidence": {
          "basis": "unassigned",
          "note": "Director’s client-specific campaign publication explicitly credits @bebcak. No film is attached: these photographs are not paired with the unrelated 130-year advert."
        }
      },
      {
        "src": "/images/work/skoda-social-stories/published-extra-16.webp",
        "smallSrc": "/images/work/skoda-social-stories/published-extra-16-480.webp",
        "smallWidth": 384,
        "width": 1080,
        "height": 1350,
        "alt": "Škoda — Social stories — costumed performers on the studio set",
        "evidence": {
          "basis": "unassigned",
          "note": "Director’s client-specific campaign publication explicitly credits @bebcak. No film is attached: these photographs are not paired with the unrelated 130-year advert."
        }
      }
    ],
    "videos": [],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "@shotbykill"
      },
      {
        "label": "Production",
        "value": "Heroes Prague"
      },
      {
        "label": "Agency",
        "value": "FCB London"
      },
      {
        "label": "Costumes",
        "value": "Dušan Bebčák"
      },
      {
        "label": "Photography",
        "value": "Vojtěch Veškrna"
      }
    ],
    "sources": [
      {
        "label": "Director’s exact campaign publication",
        "url": "https://www.instagram.com/p/DYfX4ByGmOi/"
      }
    ],
    "portrait": true,
    "scope": "study",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/DYfX4ByGmOi/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "raiffeisen-wardrobe",
    "slug": "raiffeisen-wardrobe",
    "title": "Raiffeisen — Wardrobe fittings",
    "thumbnail": {
      "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-12.webp",
      "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-12-480.webp",
      "smallWidth": 360,
      "width": 796,
      "height": 1061,
      "alt": "Raiffeisen — Workshop & casual wardrobe — photograph 8",
      "evidence": {
        "basis": "unassigned",
        "note": "No advert attached; no campaign association inferred."
      }
    },
    "images": [
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-5.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-5-480.webp",
        "smallWidth": 362,
        "width": 480,
        "height": 636,
        "alt": "Raiffeisen — Workshop & casual wardrobe — wardrobe photograph 1",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-6.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-6-480.webp",
        "smallWidth": 362,
        "width": 1170,
        "height": 1552,
        "alt": "Raiffeisen — Workshop & casual wardrobe — wardrobe photograph 2",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-7.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-7-480.webp",
        "smallWidth": 362,
        "width": 1170,
        "height": 1552,
        "alt": "Raiffeisen — Workshop & casual wardrobe — wardrobe photograph 3",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-8.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-8-480.webp",
        "smallWidth": 360,
        "width": 686,
        "height": 914,
        "alt": "Raiffeisen — Workshop & casual wardrobe — wardrobe photograph 4",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-9.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-9-480.webp",
        "smallWidth": 362,
        "width": 480,
        "height": 636,
        "alt": "Raiffeisen — Workshop & casual wardrobe — wardrobe photograph 5",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-10.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-10-480.webp",
        "smallWidth": 362,
        "width": 1170,
        "height": 1552,
        "alt": "Raiffeisen — Workshop & casual wardrobe — wardrobe photograph 6",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-11.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-11-480.webp",
        "smallWidth": 362,
        "width": 1170,
        "height": 1552,
        "alt": "Raiffeisen — Workshop & casual wardrobe — wardrobe photograph 7",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-12.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-12-480.webp",
        "smallWidth": 360,
        "width": 796,
        "height": 1061,
        "alt": "Raiffeisen — Workshop & casual wardrobe — wardrobe photograph 8",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      }
    ],
    "videos": [],
    "credit": "Wardrobe styling",
    "facts": [
      {
        "label": "Director",
        "value": "Maca Rubio"
      },
      {
        "label": "Production",
        "value": "Stink Prague"
      },
      {
        "label": "Cinematography",
        "value": "Santi Cantillo"
      },
      {
        "label": "Wardrobe",
        "value": "Dušan Bebčák / @u_nik_orn"
      },
      {
        "label": "Agency",
        "value": "LOCCO"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DQc4eNJjIJ5/"
      }
    ],
    "portrait": false,
    "scope": "study",
    "attribution": {
      "basis": "explicit-credit",
      "source": "https://www.instagram.com/p/DQc4eNJjIJ5/",
      "note": "Direct campaign publication or Dušan’s own caption explicitly credits @bebcak / Dušan Bebčák. Shared roles remain shared, and the source caption/crew record is retained in the research dossier."
    }
  },
  {
    "id": "eon-wardrobe",
    "slug": "eon-wardrobe",
    "title": "E.ON — Wardrobe fittings",
    "thumbnail": {
      "src": "/images/work/eon/image-6.webp",
      "smallSrc": "/images/work/eon/image-6-480.webp",
      "smallWidth": 362,
      "width": 1170,
      "height": 1552,
      "alt": "E.ON — Knitwear & coat fittings — photograph 2",
      "evidence": {
        "basis": "unassigned",
        "note": "No advert attached; no campaign association inferred."
      }
    },
    "images": [
      {
        "src": "/images/work/eon/image-4.webp",
        "smallSrc": "/images/work/eon/image-4-480.webp",
        "smallWidth": 362,
        "width": 1170,
        "height": 1552,
        "alt": "E.ON — Knitwear & coat fittings — wardrobe photograph 1",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/eon/image-6.webp",
        "smallSrc": "/images/work/eon/image-6-480.webp",
        "smallWidth": 362,
        "width": 1170,
        "height": 1552,
        "alt": "E.ON — Knitwear & coat fittings — wardrobe photograph 2",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/eon/image-7.webp",
        "smallSrc": "/images/work/eon/image-7-480.webp",
        "smallWidth": 362,
        "width": 1170,
        "height": 1552,
        "alt": "E.ON — Knitwear & coat fittings — wardrobe photograph 3",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      }
    ],
    "videos": [],
    "credit": "",
    "facts": [],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DQd4pgojHgA/"
      }
    ],
    "portrait": false,
    "scope": "study",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DQd4pgojHgA/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "period-fittings",
    "slug": "period-fittings",
    "title": "Period wardrobe",
    "thumbnail": {
      "src": "/images/work/period-fittings/fitting-15.webp",
      "smallSrc": "/images/work/period-fittings/fitting-15-480.webp",
      "smallWidth": 270,
      "width": 720,
      "height": 1280,
      "alt": "Period wardrobe — photograph 5",
      "evidence": {
        "basis": "unassigned",
        "note": "No advert attached; no campaign association inferred."
      }
    },
    "images": [
      {
        "src": "/images/work/period-fittings/fitting-05.webp",
        "smallSrc": "/images/work/period-fittings/fitting-05-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Period wardrobe — wardrobe photograph 1",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/period-fittings/fitting-06.webp",
        "smallSrc": "/images/work/period-fittings/fitting-06-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Period wardrobe — wardrobe photograph 2",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/period-fittings/fitting-07.webp",
        "smallSrc": "/images/work/period-fittings/fitting-07-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Period wardrobe — wardrobe photograph 3",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/period-fittings/fitting-12.webp",
        "smallSrc": "/images/work/period-fittings/fitting-12-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Period wardrobe — wardrobe photograph 4",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/period-fittings/fitting-15.webp",
        "smallSrc": "/images/work/period-fittings/fitting-15-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Period wardrobe — wardrobe photograph 5",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/period-fittings/fitting-16.webp",
        "smallSrc": "/images/work/period-fittings/fitting-16-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Period wardrobe — wardrobe photograph 6",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/period-fittings/fitting-17.webp",
        "smallSrc": "/images/work/period-fittings/fitting-17-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Period wardrobe — wardrobe photograph 7",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      }
    ],
    "videos": [],
    "credit": "",
    "facts": [],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DRzoiZMDLoM/"
      }
    ],
    "portrait": true,
    "scope": "study",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DRzoiZMDLoM/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "armour-fittings",
    "slug": "armour-fittings",
    "title": "Armour workshop",
    "thumbnail": {
      "src": "/images/work/woodland-costumes/image-2.webp",
      "smallSrc": "/images/work/woodland-costumes/image-2-480.webp",
      "smallWidth": 384,
      "width": 1280,
      "height": 1600,
      "alt": "Armour — Fittings & workshop — wardrobe photograph 2",
      "evidence": {
        "basis": "unassigned",
        "note": "No advert attached; no campaign association inferred."
      }
    },
    "images": [
      {
        "src": "/images/work/woodland-costumes/image-2.webp",
        "smallSrc": "/images/work/woodland-costumes/image-2-480.webp",
        "smallWidth": 384,
        "width": 1280,
        "height": 1600,
        "alt": "Armour — Fittings & workshop — wardrobe photograph 2",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      }
    ],
    "videos": [],
    "credit": "",
    "facts": [],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DFlPHEJMUbB/"
      }
    ],
    "portrait": true,
    "scope": "study",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DFlPHEJMUbB/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "purple-and-gold-character",
    "slug": "purple-and-gold-character",
    "title": "Purple and gold costume",
    "thumbnail": {
      "src": "/images/work/purple-and-gold-character/image-1.webp",
      "smallSrc": "/images/work/purple-and-gold-character/image-1-480.webp",
      "smallWidth": 384,
      "width": 1280,
      "height": 1600,
      "alt": "Purple & gold character costume — photograph 1",
      "evidence": {
        "basis": "unassigned",
        "note": "No advert attached; no campaign association inferred."
      }
    },
    "images": [
      {
        "src": "/images/work/purple-and-gold-character/image-1.webp",
        "smallSrc": "/images/work/purple-and-gold-character/image-1-480.webp",
        "smallWidth": 384,
        "width": 1280,
        "height": 1600,
        "alt": "Purple & gold character costume — wardrobe photograph 1",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/purple-and-gold-character/image-2.webp",
        "smallSrc": "/images/work/purple-and-gold-character/image-2-480.webp",
        "smallWidth": 384,
        "width": 1280,
        "height": 1600,
        "alt": "Purple & gold character costume — wardrobe photograph 2",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      }
    ],
    "videos": [],
    "credit": "",
    "facts": [],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8lmaBTtkQv/"
      }
    ],
    "portrait": true,
    "scope": "study",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8lmaBTtkQv/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "blue-haired-armour",
    "slug": "blue-haired-armour",
    "title": "Blue-haired character costume",
    "thumbnail": {
      "src": "/images/work/blue-haired-armour/cover.webp",
      "smallSrc": "/images/work/blue-haired-armour/cover-480.webp",
      "smallWidth": 480,
      "width": 1000,
      "height": 579,
      "alt": "Blue-haired armour & character reference"
    },
    "images": [
      {
        "src": "/images/work/blue-haired-armour/image-1.webp",
        "smallSrc": "/images/work/blue-haired-armour/image-1-480.webp",
        "smallWidth": 480,
        "width": 1255,
        "height": 727,
        "alt": "Blue-haired armour & character reference — wardrobe photograph 1",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      }
    ],
    "videos": [],
    "credit": "",
    "facts": [],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8lkOq9Nrts/"
      }
    ],
    "portrait": false,
    "scope": "study",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8lkOq9Nrts/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "gold-and-white-armour",
    "slug": "gold-and-white-armour",
    "title": "Gold and white armour",
    "thumbnail": {
      "src": "/images/work/gold-and-white-armour/cover.webp",
      "smallSrc": "/images/work/gold-and-white-armour/cover-480.webp",
      "smallWidth": 480,
      "width": 1000,
      "height": 600,
      "alt": "Gold & white armour — Shield & staff"
    },
    "images": [
      {
        "src": "/images/work/gold-and-white-armour/image-1.webp",
        "smallSrc": "/images/work/gold-and-white-armour/image-1-480.webp",
        "smallWidth": 480,
        "width": 1183,
        "height": 710,
        "alt": "Gold & white armour — Shield & staff — wardrobe photograph 1",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      }
    ],
    "videos": [],
    "credit": "",
    "facts": [],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8lkMZzNOy9/"
      }
    ],
    "portrait": false,
    "scope": "study",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8lkMZzNOy9/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "wardrobe-fittings",
    "slug": "wardrobe-fittings",
    "title": "Colour studies & fittings",
    "thumbnail": {
      "src": "/images/work/wardrobe-fittings/fitting-03.webp",
      "smallSrc": "/images/work/wardrobe-fittings/fitting-03-480.webp",
      "smallWidth": 270,
      "width": 720,
      "height": 1280,
      "alt": "Colour studies & fittings"
    },
    "images": [
      {
        "src": "/images/work/wardrobe-fittings/fitting-03.webp",
        "smallSrc": "/images/work/wardrobe-fittings/fitting-03-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Colour studies & fittings — wardrobe photograph 1",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/wardrobe-fittings/fitting-04.webp",
        "smallSrc": "/images/work/wardrobe-fittings/fitting-04-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Colour studies & fittings — wardrobe photograph 2",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/wardrobe-fittings/fitting-07.webp",
        "smallSrc": "/images/work/wardrobe-fittings/fitting-07-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Colour studies & fittings — wardrobe photograph 3",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/wardrobe-fittings/fitting-09.webp",
        "smallSrc": "/images/work/wardrobe-fittings/fitting-09-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Colour studies & fittings — wardrobe photograph 4",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/wardrobe-fittings/fitting-14.webp",
        "smallSrc": "/images/work/wardrobe-fittings/fitting-14-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Colour studies & fittings — wardrobe photograph 5",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/wardrobe-fittings/fitting-16.webp",
        "smallSrc": "/images/work/wardrobe-fittings/fitting-16-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Colour studies & fittings — wardrobe photograph 6",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/wardrobe-fittings/fitting-17.webp",
        "smallSrc": "/images/work/wardrobe-fittings/fitting-17-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Colour studies & fittings — wardrobe photograph 7",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/wardrobe-fittings/fitting-18.webp",
        "smallSrc": "/images/work/wardrobe-fittings/fitting-18-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Colour studies & fittings — wardrobe photograph 8",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      }
    ],
    "videos": [],
    "credit": "",
    "facts": [],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DRvRoeLDIEG/"
      }
    ],
    "portrait": true,
    "scope": "study",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DRvRoeLDIEG/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "everyday-fittings",
    "slug": "everyday-fittings",
    "title": "Everyday wardrobe",
    "thumbnail": {
      "src": "/images/work/everyday-fittings/fitting-16.webp",
      "smallSrc": "/images/work/everyday-fittings/fitting-16-480.webp",
      "smallWidth": 270,
      "width": 720,
      "height": 1280,
      "alt": "Everyday wardrobe — photograph 14",
      "evidence": {
        "basis": "unassigned",
        "note": "No advert attached; no campaign association inferred."
      }
    },
    "images": [
      {
        "src": "/images/work/everyday-fittings/fitting-01.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-01-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 1",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-02.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-02-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 2",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-03.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-03-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 3",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-04.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-04-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 4",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-05.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-05-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 5",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-06.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-06-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 6",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-08.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-08-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 7",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-09.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-09-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 8",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-10.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-10-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 9",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-11.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-11-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 10",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-12.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-12-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 11",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-13.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-13-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 12",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-15.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-15-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 13",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-16.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-16-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 14",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-17.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-17-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 15",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-18.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-18-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 16",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-20.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-20-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 17",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-21.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-21-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 18",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-23.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-23-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 19",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-24.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-24-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 20",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-26.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-26-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 21",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-28.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-28-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 22",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-29.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-29-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 23",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-30.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-30-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 24",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/everyday-fittings/fitting-31.webp",
        "smallSrc": "/images/work/everyday-fittings/fitting-31-480.webp",
        "smallWidth": 270,
        "width": 720,
        "height": 1280,
        "alt": "Everyday wardrobe — wardrobe photograph 25",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      },
      {
        "src": "/images/work/raiffeisen-spooky-vintage-shopping/image-3.webp",
        "smallSrc": "/images/work/raiffeisen-spooky-vintage-shopping/image-3-480.webp",
        "smallWidth": 480,
        "width": 1170,
        "height": 881,
        "alt": "Everyday wardrobe — wardrobe photograph 26",
        "evidence": {
          "basis": "unassigned",
          "note": "No advert attached; no campaign association inferred."
        }
      }
    ],
    "videos": [],
    "credit": "",
    "facts": [],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/DIajKOQCqmR/"
      }
    ],
    "portrait": true,
    "scope": "study",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/DIajKOQCqmR/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  },
  {
    "id": "youth-wardrobe",
    "slug": "youth-wardrobe",
    "title": "Youth wardrobe",
    "images": [
      {
        "src": "/images/work/youth-wardrobe/wardrobe-2.webp",
        "smallSrc": "/images/work/youth-wardrobe/wardrobe-2-480.webp",
        "smallWidth": 480,
        "width": 527,
        "height": 360,
        "alt": "Youth wardrobe — Everyday scenes — costume in the finished film, frame 2",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8T3SIsN6TJ.mp4",
          "note": "Extracted from this film."
        }
      },
      {
        "src": "/images/work/youth-wardrobe/detail-2.webp",
        "smallSrc": "/images/work/youth-wardrobe/detail-2-480.webp",
        "smallWidth": 480,
        "width": 526,
        "height": 360,
        "alt": "Youth wardrobe — Everyday scenes — frame from the advert",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8T3SIsN6TJ.mp4",
          "note": "Visually inspected costume frame at 13.526 seconds, extracted from the exact advert file shown above; not a separate fitting or behind-the-scenes photograph."
        }
      },
      {
        "src": "/images/work/youth-wardrobe/costume-v1-1.webp",
        "smallSrc": "/images/work/youth-wardrobe/costume-v1-1-480.webp",
        "smallWidth": 480,
        "width": 526,
        "height": 360,
        "alt": "Youth wardrobe — Everyday scenes — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8T3SIsN6TJ.mp4",
          "note": "Costume-focused frame at 5.072s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/youth-wardrobe/costume-v1-2.webp",
        "smallSrc": "/images/work/youth-wardrobe/costume-v1-2-480.webp",
        "smallWidth": 480,
        "width": 526,
        "height": 360,
        "alt": "Youth wardrobe — Everyday scenes — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8T3SIsN6TJ.mp4",
          "note": "Costume-focused frame at 9.722s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      },
      {
        "src": "/images/work/youth-wardrobe/costume-v1-6.webp",
        "smallSrc": "/images/work/youth-wardrobe/costume-v1-6-480.webp",
        "smallWidth": 480,
        "width": 527,
        "height": 360,
        "alt": "Youth wardrobe — Everyday scenes — costume in the finished film",
        "evidence": {
          "basis": "film-frame",
          "videoSrc": "/videos/C8T3SIsN6TJ.mp4",
          "note": "Costume-focused frame at 28.744s, visually reviewed and extracted from the exact film served on this project; not a fitting photograph."
        }
      }
    ],
    "videos": [
      {
        "provider": "native",
        "title": "Youth wardrobe",
        "url": "https://www.instagram.com/p/C8T3SIsN6TJ/",
        "src": "/videos/C8T3SIsN6TJ.mp4",
        "width": 638,
        "height": 360,
        "poster": {
          "src": "/images/work/youth-wardrobe/wardrobe-1.webp",
          "smallSrc": "/images/work/youth-wardrobe/wardrobe-1-480.webp",
          "smallWidth": 480,
          "width": 638,
          "height": 360,
          "alt": "Youth wardrobe — Everyday scenes — costume in the finished film, frame 1"
        }
      }
    ],
    "credit": "",
    "facts": [
      {
        "label": "Director",
        "value": "Novák & Nguyen"
      },
      {
        "label": "Production",
        "value": "Boogie Films"
      }
    ],
    "sources": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/p/C8T3SIsN6TJ/"
      }
    ],
    "portrait": false,
    "thumbnail": {
      "src": "/images/work/youth-wardrobe/wardrobe-1.webp",
      "smallSrc": "/images/work/youth-wardrobe/wardrobe-1-480.webp",
      "smallWidth": 480,
      "width": 638,
      "height": 360,
      "alt": "Youth wardrobe — Everyday scenes — costume in the finished film, frame 1"
    },
    "scope": "campaign",
    "attribution": {
      "basis": "own-portfolio",
      "source": "https://www.instagram.com/p/C8T3SIsN6TJ/",
      "note": "Published on Dušan’s @bebcak professional portfolio. The exact film/costumes were visually compared with this publication. His participation is supported by his own portfolio; the precise role, design/fabrication responsibility and drawing authorship are not independently established and are not assigned."
    }
  }
]
export function getProjectBySlug(slug: string): Project | undefined { return projects.find(project => project.slug === slug) }
export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
 const index = projects.findIndex(project => project.slug === slug)
 return index < 0 ? { prev: null, next: null } : { prev: projects[index - 1] ?? null, next: projects[index + 1] ?? null }
}
