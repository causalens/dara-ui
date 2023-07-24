import { faRodSnake } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RodSnake icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RodSnake = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRodSnake} {...props} />;
};

export default RodSnake;
