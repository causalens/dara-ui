import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LayerGroup icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LayerGroup = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLayerGroup} {...props} />;
};

export default LayerGroup;
