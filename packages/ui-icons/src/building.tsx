import { faBuilding } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Building icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Building = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuilding} {...props} />;
};

export default Building;
