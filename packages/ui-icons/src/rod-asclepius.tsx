import { faRodAsclepius } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RodAsclepius icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RodAsclepius = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRodAsclepius} {...props} />;
};

export default RodAsclepius;
