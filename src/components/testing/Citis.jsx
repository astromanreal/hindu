import "./Citis.css";

export default function Citis() {
  return (
    <>
      <div className="card-body">
        <div class="card">
          <div class="rectangle"></div>
          <div class="card-img">
            <img
              src="https://images.unsplash.com/photo-1606002830191-c1b4f20e6cda?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Herse Headman"
            />
            <div class="card-img-overlay">
              <p>
                arch <br />
                owl
              </p>
            </div>
          </div>
          <div class="card-content">
            <h2>herse headman</h2>
            <p>CO-Founder</p>
          </div>
        </div>
        <div class="card">
          <div class="rectangle"></div>
          <div class="card-img">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Paulina Smith"
            />
            <div class="card-img-overlay">
              <p>
                arch <br />
                owl
              </p>
            </div>
          </div>
          <div class="card-content">
            <h2>paulina smith</h2>
            <p>Manager</p>
          </div>
        </div>
      </div>
    </>
  );
}
