import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingColumns icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingColumns = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingColumns} {...props} />;
};

export default BuildingColumns;
