import React, { useCallback } from "react";
import styled from "styled-components";
import SliderHorizontal from "./SliderHorizontal.js";
import { Form, Accordion, Card, useAccordionButton } from "react-bootstrap";
import { BsFillGearFill} from 'react-icons/bs';
import useCrashData from '../CrashDataContext'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>{}
  );

  return (
    <BsFillGearFill onClick={decoratedOnClick} />
  );
}

const ControllerContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 85px;
  background: rgba(255,255,255,1);
  border-radius: 8px;
  border: 2px solid black;
  width: 280px;
  font-size: 0.8rem;
  font-weight: bold;
  z-Index: 100;
`;

const Controller = () => {
  const state = useCrashData()
  const { layerControllers, updateLayerProp} = state;

  return (
    <ControllerContainer>
      <Accordion flush>
        {layerControllers.map((layer,i) => (
          <Card>
            <Card.Header style={{ width: "100%" }}>
              <div>
                <span className="float-left">
              <Form.Check
                type="switch"
                label={layer.title}
                checked={state[layer.layer].visible}
                key={`layer-${layer.title}-visible`}
                onChange={e => updateLayerProp({ layer: layer.layer, field: "visible", value: e.target.checked})}
              />
              </span>
              <span className="float-right">
              <CustomToggle eventKey={i} />
              </span>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey={i}>
            <Card.Body>
              {layer.controllers.map((controller) => (
                <SliderHorizontal
                  key={`layer-${layer.layer}-controller-${controller.property}`}
                  layer={layer.layer}
                  title={controller.title}
                  maxx={controller.maxX}
                  minx={controller.minX}
                  xstep={controller.stepX}
                  property={controller.property}
                  multiplier={controller.multiplier}
                />
              ))}
            </Card.Body>
            </Accordion.Collapse>            
          </Card>
        ))}
      </Accordion>
    </ControllerContainer>
  );
};

export default Controller;
/*

              

*/
