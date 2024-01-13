import GodsData from "./GodsData";
import GodCategory from "./GodCategory";
import AllGods from "./AllGogs";

export default function GodsItems() {
  return (
    <>
      <h1>Main </h1>
    </>
  );
}

export function TrimurtiGod() {
  return (
    <>
      <TridevGod />
      <TrideviGod />
    </>
  );
}

export function TridevGod() {
  const image =
    "https://images-assets.nasa.gov/image/AFRC2023-0166-129/AFRC2023-0166-129~medium.jpg";
  return (
    <>
      <div class="tridev-wrapper">
        <h1>Tridev</h1>
        <div class="cols">
          {GodsData.map((i) => {
            if (i.name === "Tridev") {
              return i.details.map((d) => {
                return (
                  <>
                    <div
                      class="col"
                      ontouchstart="this.classList.toggle('hover');"
                    >
                      <div class="container">
                        <div
                          class="front"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        >
                          <div class="inner">
                            <p>Sohanidd</p>
                            <span>Lorem ipsum</span>
                          </div>
                        </div>
                        <div class="back">
                          <div class="inner">
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Alias cum repellat velit quae
                              suscipit c.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              });
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}

export function TrideviGod() {
  const image =
    "https://images-assets.nasa.gov/image/AFRC2023-0166-129/AFRC2023-0166-129~medium.jpg";
  return (
    <>
      <h1>This is Tridevi</h1>
      <div class="tridev-wrapper">
        <div class="cols">
          {GodsData.map((i) => {
            if (i.name === "TriDevi") {
              return i.details.map((d) => {
                return (
                  <>
                    <div
                      class="col"
                      ontouchstart="this.classList.toggle('hover');"
                    >
                      <div class="container">
                        <div
                          class="front"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        >
                          <div class="inner">
                            <p>{d.name}</p>
                            <span>Lorem ipsum</span>
                          </div>
                        </div>
                        <div class="back">
                          <div class="inner">
                            <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Alias cum repellat velit quae
                              suscipit c.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              });
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}

export function DevGod() {
  return (
    <>
      {AllGods.map((all) => {
        if (all.title === "Dev") {
          return all.items.map((dev) => {
            if (dev.title === "Most popular") {
              return (
                <div key={dev.title}>
                  <GodCategory title={dev.title} items={dev.items} />
                </div>
              );
            }
            return null;
          });
        }
        return null;
      })}
    </>
  );
}

export function DevtaGod() {
  return (
    <>
      <h1>Main </h1>
    </>
  );
}

export function RigvedicGod() {
  return (
    <>
      {AllGods.map((all) => {
        if (all.title === "Rigvedic") {
          return all.items.map((rigved) => {
            if (rigved.title === "Rudra") {
              return (
                <div key={rigved.title}>
                  <GodCategory
                    title={rigved.title}
                    desc={rigved.desc}
                    items={rigved.items}
                  />
                </div>
              );
            } else if (rigved.title === "Aditya") {
              return (
                <div key={rigved.title}>
                  <GodCategory
                    title={rigved.title}
                    desc={rigved.desc}
                    items={rigved.items}
                  />
                </div>
              );
            } else if (rigved.title === "Vasus") {
              return (
                <div key={rigved.title}>
                  <GodCategory
                    title={rigved.title}
                    desc={rigved.desc}
                    items={rigved.items}
                  />
                </div>
              );
            } else if (rigved.title === "Ashvins") {
              return (
                <div key={rigved.title}>
                  <GodCategory
                    title={rigved.title}
                    desc={rigved.desc}
                    items={rigved.items}
                  />
                </div>
              );
            }
          });
        }
      })}
    </>
  );
}
