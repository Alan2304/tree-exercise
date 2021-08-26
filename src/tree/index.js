import "./index.css";

export default function Tree() {
  return (
    <div className="tree">
      <ol>
        <li>
          <p>root</p>
        </li>
        <ol>
          <li>
            <p>ant</p>
          </li>
          <li>
            <p>bear</p>
            <ol>
              <li>
                <p>cat</p>
              </li>
              <li>
                <p>dog</p>
                <ol>
                  <li>
                    <p>elephant</p>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <p>frog</p>
          </li>
        </ol>
      </ol>
    </div>
  );
}
