"use client";
import { useEffect, useState } from "react";

import "./style.scss";

const DonateCalendar = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleLocChange = (event) => {
    setLocationValue(event.target.value);
  };

  const [dateshow, setDateshow] = useState(false);

  useEffect(() => {
    const displayDate = () => {
      if (selectedValue === "january" || "february" || "march") {
        setDateshow(true);
      } else {
        setDateshow(false);
      }
    };
    displayDate();
  }, [handleChange]);

  const options = [
    { label: "Select Month (2023)", value: "" },
    { label: "January", value: "january" },
    { label: "February", value: "february" },
    { label: "March", value: "march" },
    { label: "April", value: "april" },
    { label: "May", value: "may" },
    { label: "June", value: "june" },
    { label: "July", value: "july" },
    { label: "August", value: "august" },
    { label: "September", value: "september" },
    { label: "October", value: "october" },
    { label: "November", value: "november" },
    { label: "December", value: "december" },
  ];

  const January = () => {
    return (
      <div className="janTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
          </tr>
          <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
          </tr>
          <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>
          <tr>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td className="grey-d">1</td>
            <td className="grey-d">2</td>
            <td className="grey-d">3</td>
            <td className="grey-d">4</td>
          </tr>
        </table>
      </div>
    );
  };
  const February = () => {
    return (
      <div className="febTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td className="grey-d">29</td>
            <td className="grey-d">30</td>

            <td className="grey-d">31</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
          </tr>
          <tr>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
          </tr>
          <tr>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td className="grey-d">1</td>
            <td className="grey-d">2</td>
            <td className="grey-d">3</td>
            <td className="grey-d">4</td>
          </tr>
        </table>
      </div>
    );
  };
  const March = () => {
    return (
      <div className="marTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td className="grey-d">26</td>
            <td className="grey-d">27</td>
            <td className="grey-d">28</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
          </tr>
          <tr>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
          </tr>
          <tr>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td className="grey-d">1</td>
          </tr>
        </table>
      </div>
    );
  };
  const April = () => {
    return (
      <div className="aprTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td className="grey-d">26</td>
            <td className="grey-d">27</td>
            <td className="grey-d">28</td>
            <td className="grey-d">29</td>
            <td className="grey-d">30</td>
            <td className="grey-d">31</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td className={locationValue === "faridabad" ? "faridabad-d" : ""}>
              5
            </td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
          </tr>
          <tr>
            <td>16</td>
            <td className={locationValue === "ghaziabad" ? "ghaziabad-d" : ""}>
              17
            </td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
          </tr>
          <tr>
            <td>23</td>
            <td className={locationValue === "noida" ? "noida-d" : ""}>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
          </tr>
          <tr>
            <td className={locationValue === "delhi" ? "delhi-d" : ""}>30</td>
            <td className="grey-d">1</td>
            <td className="grey-d">2</td>
            <td className="grey-d">3</td>
            <td className="grey-d">4</td>
            <td className="grey-d">5</td>
            <td className="grey-d">6</td>
          </tr>
        </table>
      </div>
    );
  };
  const May = () => {
    return (
      <div className="mayTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td className="grey-d">30</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td className={locationValue === "ghaziabad" ? "ghaziabad-d" : ""}>
              10
            </td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
          </tr>
          <tr>
            <td className={locationValue === "faridabad" ? "faridabad-d" : ""}>
              14
            </td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
          </tr>
          <tr>
            <td>21</td>
            <td>22</td>
            <td className={locationValue === "delhi" ? "delhi-d" : ""}>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
          </tr>
          <tr>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td className="grey-d">1</td>
            <td className="grey-d">2</td>
            <td className="grey-d">3</td>
          </tr>
        </table>
      </div>
    );
  };
  const June = () => {
    return (
      <div className="junTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td className="grey-d">28</td>
            <td className="grey-d">29</td>
            <td className="grey-d">30</td>
            <td className="grey-d">31</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
          </tr>
          <tr>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td className="grey-d">1</td>
          </tr>
        </table>
      </div>
    );
  };
  const July = () => {
    return (
      <div className="julTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td className="grey-d">25</td>
            <td className="grey-d">26</td>
            <td className="grey-d">27</td>
            <td className="grey-d">28</td>
            <td className="grey-d">29</td>
            <td className="grey-d">30</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
          </tr>
          <tr>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
          </tr>
          <tr>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
          </tr>
          <tr>
            <td>30</td>
            <td>31</td>
            <td className="grey-d">1</td>
            <td className="grey-d">2</td>
            <td className="grey-d">3</td>
            <td className="grey-d">4</td>
            <td className="grey-d">5</td>
          </tr>
        </table>
      </div>
    );
  };
  const August = () => {
    return (
      <div className="augTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td className="grey-d">30</td>
            <td className="grey-d">31</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
          <tr>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
          </tr>
          <tr>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
          </tr>
          <tr>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td className="grey-d">1</td>
            <td className="grey-d">2</td>
          </tr>
        </table>
      </div>
    );
  };
  const September = () => {
    return (
      <div className="sepTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td className="grey-d">27</td>
            <td className="grey-d">28</td>
            <td className="grey-d">29</td>
            <td className="grey-d">30</td>
            <td className="grey-d">31</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
          <tr>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
          </tr>
          <tr>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
          </tr>
        </table>
      </div>
    );
  };
  const October = () => {
    return (
      <div className="octTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
          </tr>
          <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
          </tr>
          <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>
          <tr>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td className="grey-d">1</td>
            <td className="grey-d">2</td>
            <td className="grey-d">3</td>
            <td className="grey-d">4</td>
          </tr>
        </table>
      </div>
    );
  };
  const November = () => {
    return (
      <div className="novTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td className="grey-d">29</td>
            <td className="grey-d">30</td>
            <td className="grey-d">31</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
          </tr>
          <tr>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
          </tr>
          <tr>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td className="grey-d">1</td>
            <td className="grey-d">2</td>
          </tr>
        </table>
      </div>
    );
  };
  const December = () => {
    return (
      <div className="decTable calTable">
        <table>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td className="grey-d">26</td>
            <td className="grey-d">27</td>
            <td className="grey-d">28</td>
            <td className="grey-d">29</td>
            <td className="grey-d">30</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
          <tr>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
          </tr>
          <tr>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
          </tr>
          <tr>
            <td>31</td>
            <td className="grey-d">1</td>
            <td className="grey-d">2</td>
            <td className="grey-d">3</td>
            <td className="grey-d">4</td>
            <td className="grey-d">5</td>
            <td className="grey-d">6</td>
          </tr>
        </table>
      </div>
    );
  };
  return (
    <section className="donateCalendar">
      <div className="selectDiv">
        <div className="selectLocation">
          <select value={locationValue} onChange={handleLocChange}>
            <option>--Select Location--</option>
            <option value="delhi">Delhi</option>
            <option value="noida">Noida</option>
            <option value="ghaziabad">Ghaziabad</option>
            <option value="faridabad">Faridabad</option>
            <option value="gurugram">Gurugram</option>
          </select>
        </div>
        <div className="selectMonth">
          <select value={selectedValue} onChange={handleChange}>
            {options.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
      </div>
      <div className={dateshow ? "availableDatesShow" : "availableDates"}>
        {selectedValue === "january" && <January />}
        {selectedValue === "february" && <February />}
        {selectedValue === "march" && <March />}
        {selectedValue === "april" && <April />}
        {selectedValue === "may" && <May />}
        {selectedValue === "june" && <June />}
        {selectedValue === "july" && <July />}
        {selectedValue === "august" && <August />}
        {selectedValue === "september" && <September />}
        {selectedValue === "october" && <October />}
        {selectedValue === "november" && <November />}
        {selectedValue === "december" && <December />}
      </div>
    </section>
  );
};

export default DonateCalendar;
