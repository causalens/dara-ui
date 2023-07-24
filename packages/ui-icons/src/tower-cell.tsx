import { faTowerCell } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TowerCell icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TowerCell = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTowerCell} {...props} />;
};

export default TowerCell;
