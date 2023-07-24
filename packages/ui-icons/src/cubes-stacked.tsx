import { faCubesStacked } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CubesStacked icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CubesStacked = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCubesStacked} {...props} />;
};

export default CubesStacked;
